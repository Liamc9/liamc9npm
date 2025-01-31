import React from 'react';
import styled from 'styled-components';

const TextInput3 = ({label, ...props}) => {
  return (
    <StyledWrapper gridSpan={props.gridSpan}>
      <div className="input-group">
        <input required type="text" {...props} className="input" />
        <label className="user-label">{label}</label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
      grid-column: ${(props) => props.gridSpan || 'auto'};

  .input-group {
   position: relative;
  }

  .input {
   border: solid 1.5px #9e9e9e;
   border-radius: 1rem;
   background: none;
   padding: 1rem;
   font-size: 1rem;
   color: #000;
   transition: border 150ms cubic-bezier(0.4,0,0.2,1);
  }

  .user-label {
   position: absolute;
   left: 15px;
   color: #e8e8e8;
   pointer-events: none;
   transform: translateY(1rem);
   transition: 150ms cubic-bezier(0.4,0,0.2,1);
  }

  .input:focus, input:valid {
   outline: none;
   border: 1.5px solid #1a73e8;
  }

  .input:focus ~ label, input:valid ~ label {
   transform: translateY(-50%) scale(0.8);
   background-color: #fff;
   padding: 0 .2em;
   color: #2196f3;
  }`;

export default TextInput3;
