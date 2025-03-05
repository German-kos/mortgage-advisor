import { Grid } from "@radix-ui/themes/components/grid";
import { CustomBox } from "./CustomBox";
import { CustomContainer } from "./CustomContainer";
import { Form } from "./Form";

export const FormSection = () => {
  return (
    <CustomBox className="py-24">
      <CustomContainer>
        <Grid className="gap-16 grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1">
          <img
            className="max-w-[576px] max-h-[574px]"
            src="/images/Form.png"
            alt="Form"
            loading="lazy"
          />
          <Form />
        </Grid>
      </CustomContainer>
    </CustomBox>
  );
};
