import { Form } from "radix-ui";

type CustomRadixFieldProps = {
  name: string;
  text: string;
  type: string;
  placeholder: string;
  mismatch?: boolean;
  mismatchText?: string;
};

export const CustomRadixField = ({
  name,
  text,
  type,
  placeholder,
  mismatch,
  mismatchText,
}: CustomRadixFieldProps) => {
  return (
    <Form.Field name={name}>
      <div className="flex justify-between">
        <Form.Label className="font-medium text-[#344054] text-sm">
          {text}
        </Form.Label>
        <Form.Message
          className="opacity-80 font-medium text-red-600 text-sm text-left"
          match="valueMissing"
        >
          שדה חובה *
        </Form.Message>
        {mismatch && mismatchText && (
          <Form.Message
            className="opacity-80 font-medium text-red-600 text-sm text-left"
            match="typeMismatch"
          >
            {mismatchText}
          </Form.Message>
        )}
      </div>
      <Form.Control asChild>
        <input
          className="bg-white hover:bg-[#f1f1f1] focus:bg-[#f1f1f1] px-3.5 py-2.5 border-[#D0D5DD] border-1 rounded-xl w-full text-base text-right transition placeholder-[#667085]"
          type={type}
          required
          placeholder={placeholder}
        />
      </Form.Control>
    </Form.Field>
  );
};
