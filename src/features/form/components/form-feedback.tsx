import { useFormStatus } from "@/features/form/context/form-status-context";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { Box } from "@radix-ui/themes";

export const FormFeedback = () => {
  const { status } = useFormStatus();

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status !== "idle" && (
        <motion.div
          key={status}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center items-center w-full h-full"
        >
          <Box className="flex flex-col items-center p-6 text-center">
            {status === "loading" && (
              <>
                <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                <p className="mt-4 font-medium text-blue-600 text-lg">
                  שולח את הבקשה שלך...
                </p>
              </>
            )}
            {status === "success" && (
              <>
                <CheckCircle2 className="w-10 h-10 text-green-600" />
                <p className="mt-4 font-medium text-green-600 text-lg">
                  נשלח בהצלחה! נחזור אליך בהקדם.
                </p>
              </>
            )}
            {status === "error" && (
              <>
                <XCircle className="w-10 h-10 text-red-600" />
                <p className="mt-4 font-medium text-red-600 text-lg">
                  שגיאה בשליחה. נסה שוב בעוד רגע.
                </p>
              </>
            )}
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
