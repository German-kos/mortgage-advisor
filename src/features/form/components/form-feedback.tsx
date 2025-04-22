import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { Box } from "@radix-ui/themes";
import { useFormStatus } from "../context";

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
                <Loader2 className="w-16 h-16 text-blue-600 animate-spin" />
                <p className="mt-4 font-medium text-blue-600 text-3xl">
                  שולח את הבקשה שלך...
                </p>
              </>
            )}
            {status === "success" && (
              <>
                <CheckCircle2 className="w-16 h-16 text-green-600" />
                <p className="mt-4 font-medium text-green-600 text-3xl">
                  נשלח בהצלחה! נחזור אליך בהקדם.
                </p>
              </>
            )}
            {status === "error" && (
              <>
                <XCircle className="w-16 h-16 text-red-600" />
                <p className="mt-4 font-medium text-red-600 text-3xl">
                  שגיאה בשליחה! אנא נסה שוב מאוחר יותר או צור קשר באמצעות כפתור
                  הוואטסאפ.
                </p>
              </>
            )}
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
