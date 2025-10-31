'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const leftMenuStructure = [
	{
		label: 'IMPIANTI',
		children: [
			{ label: 'Residenziali', children: [] },
			{ label: 'Industriali', children: [] },
		],
	},
	{
		label: 'MANUTENZIONE',
		children: [
			{ label: 'Residenziali', children: [] },
			{ label: 'Industriali', children: [] },
		],
	},
];

export default function LeftMenu({ typeOfEntry }) {
	const [menuData, setMenuData] = useState(leftMenuStructure);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		try {
			setLoading(true);
			const response = await fetch(`/api/keystatic-data/${typeOfEntry}`, {
				cache: 'no-store', // Sempre fetch fresh data
			});

			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}

			const result = await response.json();
			const entries = result.data;

			// Processa i dati come nella versione originale
			const processedMenu = processMenuData(entries, typeOfEntry);
			setMenuData(processedMenu);
			setError(null);
		} catch (err) {
			console.error('Error fetching menu data:', err);
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, [typeOfEntry]);

	const processMenuData = (entries, typeOfEntry) => {
		const industriali = entries.filter(
			(item) => item.entry.sotto_tipo === 'industriale'
		);
		const residenziali = entries.filter(
			(item) => item.entry.sotto_tipo === 'residenziale'
		);

		const nuoviImpiantiIndustriali = industriali.filter(
			(item) => item.entry.tipo === 'nuovo-impianto'
		);
		const nuoviImpiantiResidenziali = residenziali.filter(
			(item) => item.entry.tipo === 'nuovo-impianto'
		);

		const manutenzioniIndustriali = industriali.filter(
			(item) => item.entry.tipo === 'manutenzione'
		);
		const manutenzioniResidenziali = residenziali.filter(
			(item) => item.entry.tipo === 'manutenzione'
		);

		const baseLink = typeOfEntry === 'impiantiMeccanici' ? '/meccanico' : '/elettrico';

		const newMenu = JSON.parse(JSON.stringify(leftMenuStructure)); // Deep clone

		newMenu[0].children[0].children = nuoviImpiantiResidenziali.map((item) => ({
			label: item.entry.name,
			href: `${baseLink}/impianti-residenziali/${item.slug}`,
		}));

		newMenu[0].children[1].children = nuoviImpiantiIndustriali.map((item) => ({
			label: item.entry.name,
			href: `${baseLink}/impianti-industriali/${item.slug}`,
		}));

		newMenu[1].children[0].children = manutenzioniResidenziali.map((item) => ({
			label: item.entry.name,
			href: `${baseLink}/manutenzione-residenziali/${item.slug}`,
		}));

		newMenu[1].children[1].children = manutenzioniIndustriali.map((item) => ({
			label: item.entry.name,
			href: `${baseLink}/manutenzione-industriali/${item.slug}`,
		}));

		// Filtra le categorie che non hanno figli
		newMenu.forEach((section) => {
			section.children = section.children.filter(
				(category) => category.children && category.children.length > 0
			);
		});

		// Filtra le sezioni che non hanno categorie con figli
		return newMenu.filter(
			(section) => section.children && section.children.length > 0
		);
	};

	if (loading) {
		return (
			<div className="w-full lg:w-1/4 px-4 py-6">
				<div className="animate-pulse">
					<div className="h-6 bg-gray-300 rounded mb-4"></div>
					<div className="h-4 bg-gray-300 rounded mb-2"></div>
					<div className="h-4 bg-gray-300 rounded mb-2"></div>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="w-full lg:w-1/4 px-4 py-6 bg-red-100">
				<p className="text-red-600">Errore nel caricamento del menu</p>
				<button
					onClick={fetchData}
					className="mt-2 px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
				>
					Riprova
				</button>
			</div>
		);
	}

	return (
		<div className="w-full lg:w-1/4 px-4 py-6">
			{menuData.map((section, sectionIndex) => (
				<div key={sectionIndex} className="mb-6">
					<h3 className="font-bold text-[#008DAA] mb-3 text-lg">{section.label}</h3>
					{section.children.map((category, categoryIndex) => (
						<div key={categoryIndex} className="mb-4 ml-2">
							<h4 className="font-medium text-[#008DAA] mb-2 text-sm sm:text-base">{category.label + (section.label === 'MANUTENZIONE' && typeOfEntry === 'impiantiMeccanici' ? '/Industriali' : '') }</h4>
							<ul className="space-y-1">
								{category.children.map((item, itemIndex) => (
									<li key={itemIndex}>
										<Link
											href={item.href}
											className="text-sm text-[#043C48] hover:text-[#008DAA] hover:underline block py-1 pl-4"
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			))}
		</div>
	);
}
