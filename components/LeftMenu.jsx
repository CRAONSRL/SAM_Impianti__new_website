import keystaticConfig from '@/keystatic.config';
import { createReader } from "@keystatic/core/reader";
import Link from 'next/link';

const reader = createReader(process.cwd(), keystaticConfig);

const leftMenu = [
  {
    label: 'IMPIANTI',
    children: [
      {
        label: 'Residenziali',
        children: []
      },
      {
        label: 'Industriali',
        children: []
      },
    ],
  },
  {
    label: 'MANUTENZIONE',
    children: [
      {
        label: 'Residenziali',
        children: [],
      },
      {
        label: 'Industriali',
        children: [],
      },
    ]
  },
]

async function getData( typeOfEntry ) {
  var entries = [];

  if (typeOfEntry === 'impiantiMeccanici') {
    entries = await reader.collections.impiantiMeccanici.all();
  }
  else {
    entries = await reader.collections.impiantiElettrici.all();
  }
  
  return entries;
}

function makeTheLinks(entries, props) {
  const industriali = entries.filter(item => item.entry.sotto_tipo === 'industriale');
  const residenziali = entries.filter(item => item.entry.sotto_tipo === 'residenziale');

  const nuoviImpiantiIndustriali = industriali.filter(item => item.entry.tipo === 'nuovo-impianto');
  const nuoviImpiantiResidenziali = residenziali.filter(item => item.entry.tipo === 'nuovo-impianto');

  const manutenzioniIndustriali = industriali.filter(item => item.entry.tipo === 'manutenzione');
  const manutenzioniResidenziali = residenziali.filter(item => item.entry.tipo === 'manutenzione');

  var baseLink = '/elettrico';
  
  if (props.typeOfEntry === 'impiantiMeccanici') baseLink = '/meccanico';

  nuoviImpiantiResidenziali.forEach(item => {
    console.log(item.entry);
  });

  leftMenu[0].children[0].children = nuoviImpiantiResidenziali.map(item => ({
    label: item.entry.name,
    href: `${baseLink}/impianti-residenziali/${item.slug}`,
  }));

  leftMenu[0].children[1].children = nuoviImpiantiIndustriali.map(item => ({
    label: item.entry.name,
    href: `${baseLink}/impianti-industriali/${item.slug}`,
  }));

  leftMenu[1].children[0].children = manutenzioniResidenziali.map(item => ({
    label: item.entry.name,
    href: `${baseLink}/manutenzione-residenziali/${item.slug}`,
  }));

  leftMenu[1].children[1].children = manutenzioniIndustriali.map(item => ({
    label: item.entry.name,
    href: `${baseLink}/manutenzione-industriali/${item.slug}`,
  }));
}


export default async function LeftMenu( props ) {
  const entries = await getData(props.typeOfEntry);
  makeTheLinks(entries, props);

  return (
    <section className='w-1/4 p-4'>
      {leftMenu.map((item) => (
        <div className='not-first-of-type:mt-6 last-of-type:mb-6' key={item.label}>
          <h3>{item.label}</h3>
          {item.children.map((child) => (
            <div key={child.label}>
              <h4 className='ml-2'>{child.label}</h4>
              {child.children.map((childChild) => (
                <Link href={childChild.href} key={childChild.label} className='ml-4 hover:underline cursor-pointer block'>{childChild.label}</Link>
              ))}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}