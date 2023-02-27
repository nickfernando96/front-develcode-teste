import { useState } from 'react';
import { useFormik } from 'formik';
import Input, { InputDate } from './components/Input';
import { toast, ToastContainer } from 'react-toastify';
import { Form } from './components/Form/styles';
import Button from './components/Button';
import { ApiProvider } from './contexts/ApiContext';
import { LoadingAnimated } from './components/LoadingAnimated/LoadingButtons';
import InputFile from './components/InputFile';
import { useUserClientService } from './services/userClientService';
import 'react-toastify/dist/ReactToastify.css';

const INITIAL_STATE = {
  nome: '',
  datanascimento: '',
  image: null
};

function App() {
  const [initialValues] = useState({ ...INITIAL_STATE });

  const {
    post
  } = useUserClientService();
  
  const onSubmit = async (values) => {
    if(!values.nome || !values.datanascimento || !values.image){
      toast.warn('Preencher todos os campos');
    } else {
      try {
        await post({ ...values });
        toast.success('Registrado com sucesso');
      } catch (error) {
        toast.error('Erro ao salvar', error);
      }
    }
  }

  const formikOptions = {
    enableReinitialize: true,
    initialValues,
    onSubmit
  }

  const {
    values,
    setValues,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = useFormik(formikOptions);

  const handleDocumentFile = (e) => {
    const file = e.target.files[0];
    setValues((prev) => ({ ...prev, image: file }));
  };

  return (
    <ApiProvider>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{width: '60%', marginTop: '3%', borderRadius: '10px', padding: '10px', backgroundColor: 'gray'}}>
          <Form onSubmit={handleSubmit} id='form'>
            <Input
              name='nome'
              label='Nome'
              value={values.nome}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputDate 
              name='datanascimento'
              label='Data Nascimento'
              value={values.datanascimento}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <InputFile
              buttonLabel='Selecione uma imagem'
              formats={['PNG', 'JPG', 'JPEG']}
              maxLenght={2097152}
              name="documentFile"
              id="documentFile"
              onChange={handleDocumentFile}
              onBlur={handleBlur}
            />
            <LoadingAnimated loading={isSubmitting}>
              <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                <Button id="save_btn" type="submit" form="form" labelButton='Salvar' />
              </div>
            </LoadingAnimated>
          </Form>
        </div>
      </div>
      <ToastContainer />
    </ApiProvider>
  );
}

export default App;
