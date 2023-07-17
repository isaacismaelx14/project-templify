import Handlebars from 'handlebars';

const setCommands = () => {
  Handlebars.registerHelper('uppercase', function (aString) {
    return aString.toUpperCase();
  });

  Handlebars.registerHelper('lowercase', function (aString) {
    return aString.toLowerCase();
  });

  Handlebars.registerHelper('capitalize', function (aString) {
    return aString.charAt(0).toUpperCase() + aString.slice(1);
  });
};

export const Parser = (base: string, _template: object) => {
  const template = Handlebars.compile(base);
  setCommands();
  const result = template(_template);

  return result;
};
