import React, { useState } from 'react';
import EN from '../translations/en.json';
import TR from '../translations/tr.json';
import constants from '../utils/constants.js';

// To make it easier to read from JSON files
const translations = {
  EN,
  TR,
};

// This function will be used to create `translate` function for the context
const getTranslate = langCode => key => translations[langCode][key] || key;

/* We will have two things in our context state, 
langCode will be the current language of the page
and translate will be the method to translate keys
into meaningful texts. Default language will be Turkish */
const initialState = {
  langCode: constants.languageCodes.TR,
  t: getTranslate(constants.languageCodes.TR),
};

export const I18nContext = React.createContext(initialState);

export const I18nContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  function setLanguage(languageCode) {
    if (languageCode !== state.langCode) {
      setState({ langCode: languageCode, t: getTranslate(languageCode) });
    }
  }

  /* We're Providing state object (langCode and translate method
  in this case) and also the setLanguage for the children components */
  return <I18nContext.Provider value={{ ...state, setLanguage }}>{children}</I18nContext.Provider>;
};
