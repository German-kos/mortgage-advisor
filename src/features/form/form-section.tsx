import { Grid } from "@radix-ui/themes/components/grid";
import { Form } from "@/features/form";
import { CustomBox } from "@/components/CustomBox";
import { CustomContainer } from "@/components/CustomContainer";
import { formImage } from "./constants";

const FormSection = () => {
  return (
    <CustomBox id="formSection" className="py-8 sm:py-16">
      <CustomContainer>
        <Grid className="gap-8 md:gap-16 grid lg:grid-cols-2 text-center lg:text-right">
          <div className="hidden md:flex justify-center sm:items-center sm:h-auto sm:max-h-none">
            <img {...formImage} loading="lazy" />
          </div>

          <div className="flex justify-center sm:h-auto sm:max-h-none">
            <Form />
          </div>
        </Grid>
      </CustomContainer>
    </CustomBox>
  );
};

export default FormSection;
