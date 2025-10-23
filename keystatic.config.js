// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    impiantiElettrici: collection({
      label: 'Impianti Elettrici',
      slugField: 'name',
      path: 'public/data/impianti-elettrici/*',
      schema: {
        name: fields.slug({ name: { label: 'Nome' } }),
        tipo: fields.select({
          label: 'Tipo',
          options: [
            { label: 'Nuovo Impianto', value: 'nuovo-impianto' },
            { label: 'Manutenzione', value: 'manutenzione' },
          ],
          defaultValue: 'nuovo-impianto',
        }),
        sotto_tipo: fields.select({
          label: 'Sotto Tipo',
          options: [
            { label: 'Residenziale', value: 'residenziale' },
            { label: 'Industriale', value: 'industriale' },
          ],
          defaultValue: 'residenziale',
        }),
        date: fields.date({ label: 'Data' }),
        content: fields.text({ label: 'Descrizione', multiline: true }),
        immagini: fields.array(
          fields.object({
            immagine: fields.image({ 
              label: 'Foto', 
              itemLabel: (props) =>  `Foto ${props.index.toString()}`,
              directory: 'public/images/impianti-elettrici',
              publicPath: 'images/impianti-elettrici',
            }),
          }),
          { label: 'Immagini' }
        ),
      },
    }),
    impiantiMeccanici: collection({
      label: 'Impianti Meccanici',
      slugField: 'name',
      path: 'public/data/impianti-meccanici/*',
      schema: {
        name: fields.slug({ name: { label: 'Nome' } }),
        tipo: fields.select({
          label: 'Tipo',
          options: [
            { label: 'Nuovo Impianto', value: 'nuovo-impianto' },
            { label: 'Manutenzione', value: 'manutenzione' },
          ],
          defaultValue: 'nuovo-impianto',
        }),
        sotto_tipo: fields.select({
          label: 'Sotto Tipo',
          options: [
            { label: 'Residenziale', value: 'residenziale' },
            { label: 'Industriale', value: 'industriale' },
          ],
          defaultValue: 'residenziale',
        }),
        date: fields.date({ label: 'Data' }),
        content: fields.text({ label: 'Descrizione', multiline: true }),
        immagini: fields.array(
          fields.object({
            immagine: fields.image({ 
              label: 'Foto', 
              itemLabel: (props) =>  `Foto ${props.index.toString()}`,
              directory: 'public/images/impianti-meccanici',
              publicPath: 'images/impianti-meccanici',
            }),
          }),
          { label: 'Immagini' }
        ),
      },
    }),
  },
});