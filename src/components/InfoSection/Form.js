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

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
         const res = await fetch("https://seudominio.com/register.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
         });


         // Verifica se a resposta é JSON
         if (!res.ok) {
            throw new Error("Erro de servidor");
         }

         const data = await res.json();

         if (data.success) {
            alert("Cadastro realizado com sucesso!");
            // limpa os campos
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
                  <Inputt 
                     type="tel" 
                     name="numero" 
                     placeholder="Seu número" 
                     value={formData.numero} 
                     onChange={handleChange} 
                     required
                  />
                  <Inputt 
                     type="email" 
                     name="email" 
                     placeholder="Seu email" 
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
