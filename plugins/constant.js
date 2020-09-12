export default (context, inject) => {
  const constant = Object.freeze({
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
  });

  inject("constant", constant);
  context.$constant = constant;

  // const hello = msg => console.log(`Hello ${msg}!`)
  // // Inject $hello(msg) in Vue, context and store.
  // inject('hello', hello)
  // // For Nuxt <= 2.12, also add 👇
  // context.$hello = hello
};
