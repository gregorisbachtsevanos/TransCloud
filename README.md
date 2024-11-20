# Translate
TransCloud is a powerful and easy-to-use translation library built with TypeScript. It helps you internationalize your applications by providing a simple API to manage and apply translations.

To get started with Translate, follow these steps:

Install the library:
```
import it as dependency
```
Install peer dependencies:

```
npm install
```
Usage
Set up your translation files:

Create JSON files for each language in your project. For example:

```
// en.json
{
  "greeting": "Hello, {name}!"
}
json
Αντιγραφή κώδικα
// es.json
{
  "greeting": "¡Hola, {name}!"
}
```
Initialize the library in your project:

```
import { TranslateProvider, useTranslate } from '@yourusername/translate';
import en from './locales/en.json';
import es from './locales/es.json';

const translations = {
  en,
  es,
};

const App = () => {
  return (
    <TranslateProvider translations={translations} defaultLanguage="en">
      <YourComponent />
    </TranslateProvider>
  );
};
```
Use the useTranslate hook to access translations:

```
import React from 'react';
import { useTranslate } from '@yourusername/translate';

const YourComponent = () => {
  const { t, setLanguage } = useTranslate();

  return (
    <div>
      <p>{t('greeting', { name: 'John' })}</p>
      <button onClick={() => setLanguage('es')}>Change to Spanish</button>
      <button onClick={() => setLanguage('en')}>Change to English</button>
    </div>
  );
};
```
API\
TranslateProvider\
Props:
```
translations (object): An object containing your translation files.
defaultLanguage (string): The default language to be used.
useTranslate
```
Returns:
```
t (function): A function to retrieve the translation for a given key.
```
setLanguage (function):
```
A function to change the current language.
t
```
Arguments:
```
key (string): \The key of the translation to retrieve.
params (object): An optional object containing placeholders and their values.
setLanguage
```
Arguments:
```
language (string): The language to switch to.
```
