import React, { VFC } from 'react';
import InputForm from '../../atoms/InputForms/InputForm/InputForm';
import TextArea from '../../atoms/InputForms/TextArea';
import type { inputHandlerType } from '../../../types/Handler/HandlerTypes';

type Props = {
  titleHandler?: inputHandlerType;
  descriptionHandler: inputHandlerType;
  titlePlaceholder?: string;
  descriptionPlaceholder: string;
  pointHandler?: inputHandlerType;
  pointPlaceholder?: string;
  addPointForm?: boolean;
  defaultTitle: string;
};

const DocumentationForm: VFC<Props> = (props) => {
  const {
    titleHandler,
    descriptionHandler,
    titlePlaceholder,
    descriptionPlaceholder,
    pointHandler,
    pointPlaceholder,
    addPointForm,
    defaultTitle,
  } = props;

  return (
    <div className="px-2">
      <div className="h-10 border-1 border-gray-300">
        {titleHandler && titlePlaceholder ? (
          <InputForm
            inputHandler={titleHandler}
            placeholder={titlePlaceholder}
            color="bg-base"
            type="text"
          />
        ) : (
          <div className="font-semibold text-lg leading-10 px-2">{defaultTitle}</div>
        )}
      </div>

      <div className="h-2" />

      {addPointForm && pointHandler ? (
        <div className="h-10 border-1 border-gray-300">
          <InputForm
            inputHandler={pointHandler}
            placeholder={pointPlaceholder ?? ''}
            color="bg-base"
            type="number"
          />
        </div>
      ) : (
        ''
      )}

      <div className="h-2" />

      <div className="h-70% border-1 border-gray-300">
        <TextArea
          inputHandler={descriptionHandler}
          placeholder={descriptionPlaceholder}
          color="bg-base"
        />
      </div>
    </div>
  );
};

export default DocumentationForm;
