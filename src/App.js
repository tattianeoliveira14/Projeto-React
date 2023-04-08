import { Component } from "react";
import Form from "react-jsonschema-form";

const schema  = {
    title: "Teste",
    type: "object",
    required: ["email", "senha"],
    properties: {
      email: {type: "string", title: "Email", default: "Digite"},
      senha: {type: "string", title: "Senha", default: "Digite"},
      novaconta: {type: "boolean", title: "Não cadastrado", default: false}, 
    }
};

//const log = (type) => console.log.bind(console, type);
const formData = {
    email: "",
    senha: "",
    novaconta: true
}

class App extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({formData}) {
    alert(JSON.stringify(formData));
  }

  render(){
    return (
      <Form
        schema={schema}
        formData={formData}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default App;
