let env = process.env.NODE_ENV;
env = "production";
const constObj = {};

switch (env) {
  case "production":
    constObj.BASEURL = `http://52.71.144.178/`
    break;

  case "local":
    constObj.BASEURL = `http://localhost:4000/`
    break;

  default:
     
    break;
}

// eslint-disable-next-line
console.log(`export default ${JSON.stringify(constObj)}`);
