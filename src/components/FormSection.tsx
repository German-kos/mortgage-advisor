import { Grid } from "@radix-ui/themes/components/grid";
import { CustomBox } from "./CustomBox";
import { CustomContainer } from "./CustomContainer";
import { Form } from "./Form";

export const FormSection = () => {
  return (
    <CustomBox className="py-8 sm:py-16 lg:py-24">
      <CustomContainer>
        <Grid className="sm:justify-center min-[400px]:gap-16 sm:grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 text-center lg:text-right">
          <div className="flex justify-center sm:items-center sm:h-auto sm:max-h-none">
            <img
              className="pb-10 sm:pb-0 w-full max-w-[576px] h-auto object-contain"
              src="/images/Form.png"
              alt="Form"
              loading="lazy"
            />
          </div>

          <div className="flex justify-center sm:h-auto sm:max-h-none">
            <Form />
          </div>
        </Grid>
      </CustomContainer>
    </CustomBox>
  );
};
