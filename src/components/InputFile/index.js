import React, { useState, useMemo } from 'react';
import {
  Button,
  FileInput,
  Legend,
  Container
} from './styles';


const defaultFormats = ['PNG', 'PDF'];

function InputFile({
  id,
  buttonLabel,
  formats = defaultFormats,
  name,
  onChange
}) {
  const [nameFile, setNameFile] = useState(null);

  const onGetFile = (event) => {
    const [file] = event.target.files;
    setNameFile(file.name)
    onChange(event);
  }

  const acceptStr = useMemo(() => {
    let acpt = '';
    formats.map((item, i, arr) => {
      if (arr.length - 1 !== i) {
        return (acpt += `.${item}, `);
      }
      return (acpt += `.${item}`);
    });
    return acpt;
  }, [formats]);

  return (
    <Container>
      <div className="form-group form-group-total">
        <Legend>
          <Button 
            htmlFor={id}
          >
            {buttonLabel}
          </Button>
          <FileInput
            id={id}
            name={name}
            accept={acceptStr}
            type="file"
            onChange={onGetFile}
          />
          <br />
          {nameFile && 
            (<div style={{fontSize: '16px'}}>
              <b style={{color:'#FFFFFF'}}>Nome do arquivo: {nameFile}</b>
            </div>)
          }
          <span style={{color:'#FFFFFF'}}>Formatos aceitos: 
          {' '}{formats.join(', ')}</span>

          <br />
        </Legend>
      </div>
    </Container>
  );
}

export default InputFile;
