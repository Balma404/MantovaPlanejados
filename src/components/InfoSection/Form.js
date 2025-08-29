import React, { useState } from 'react';
import { 
   FormContainer,
   Inputt,
   Form,
   BtnContainer,
   TextArea,
   FormRow,
   Column
} from './formElements';

const FormComponent = () => {
   const [formData, setFormData] = useState({
      nome: '',
      numero: '',
      email: '',
      mensagem: '',
   });

   const [loading, setLoading] = useState(false);

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   // Função para mascarar o telefone
   const handleTelefoneChange = (e) => {
      let value = e.target.value.replace(/\D/g, ''); // remove tudo que não é número

      if (value.length > 11) value = value.slice(0, 11); // limita 11 dígitos

      if (value.length > 6) {
         value = `(${value.slice(0,2)}) ${value.slice(2,7)}-${value.slice(7)}`;
      } else if (value.length > 2) {
         value = `(${value.slice(0,2)}) ${value.slice(2)}`;
      }

      setFormData({ ...formData, numero: value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
         const res = await fetch("https://seudominio.com/register.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
         });

         if (!res.ok) throw new Error("Erro de servidor");

         const data = await res.json();

         if (data.success) {
            alert("Cadastro realizado com sucesso!");
            setFormData({ nome: "", numero: "", email: "", mensagem: "" });
         } else {
            alert("Erro: " + data.message);
         }
      } catch (err) {
         alert("Erro ao conectar com servidor");
         console.error(err);
      } finally {
         setLoading(false);
      }
   };

   return (
      <FormContainer>
         <Form onSubmit={handleSubmit}>
            <FormRow>
               <Column>
                  <Inputt 
                     type="text" 
                     name="nome" 
                     placeholder="Seu nome" 
                     value={formData.nome} 
                     onChange={handleChange} 
                     required 
                  />
                  
                  {/* Campo telefone com máscara */}
                  <Inputt 
                     type="tel" 
                     name="numero" 
                     placeholder="(xx) xxxxx-xxxx" 
                     value={formData.numero} 
                     onChange={handleTelefoneChange} 
                     required 
                  />

                  <Inputt 
                     type="email" 
                     name="email" 
                     placeholder="exemplo@gmail.com" 
                     value={formData.email} 
                     onChange={handleChange} 
                     required 
                  />
               </Column>
               <Column>
                  <TextArea 
                     name="mensagem" 
                     placeholder="Deixe sua mensagem" 
                     value={formData.mensagem} 
                     onChange={handleChange} 
                     required
                  />
                  <BtnContainer type="submit" disabled={loading}>
                     {loading ? "Enviando..." : "Enviar"}
                  </BtnContainer>
               </Column>
            </FormRow>
         </Form>
      </FormContainer>
   );
};

export default FormComponent;
