import * as Dialog from "@radix-ui/react-dialog";
import { useAccessibility } from "./context/accessibility-context";

export const AccessibilityControl = () => {
  const {
    fontSize,
    contrastMode,
    showFocusOutline,
    setFontSize,
    toggleContrastMode,
    toggleFocusOutline,
  } = useAccessibility();

  return (
    <Dialog.Root>
      {/* Floating Button */}
      <Dialog.Trigger asChild>
        <button
          className="right-4 bottom-4 z-50 fixed flex justify-center items-center bg-blue-600 shadow-lg rounded-full w-14 h-14 text-white accessibility-toggle-btn"
          aria-label="אפשרויות נגישות"
        >
          <img
            src="/images/icons/accessibility.svg"
            className="w-8 h-8"
            alt="כפתור נגישות"
          />
        </button>
      </Dialog.Trigger>

      {/* Dialog Content */}
      <Dialog.Portal>
        <Dialog.Overlay className="z-40 fixed inset-0 bg-black/30 backdrop-blur-sm" />

        <Dialog.Content className="right-4 bottom-20 z-50 fixed bg-white shadow-lg p-4 border rounded-lg focus:outline-none w-64 accessibility-panel">
          <Dialog.Title className="mb-2 font-bold text-lg">
            אפשרויות נגישות
          </Dialog.Title>
          <Dialog.Close asChild>
            <button
              aria-label="סגור"
              className="top-2 left-2 absolute text-gray-500 hover:text-black hover:cursor-pointer"
            >
              ✕
            </button>
          </Dialog.Close>

          {/* Font Size Toggle */}
          <div className="mb-3">
            <label htmlFor="font-size-select" className="block mb-1">
              גודל פונט
            </label>
            <select
              id="font-size-select"
              value={fontSize}
              onChange={(e) =>
                setFontSize(e.target.value as "normal" | "large" | "small")
              }
              className="px-2 py-1 border rounded w-full"
            >
              <option value="small">קטן</option>
              <option value="normal">רגיל</option>
              <option value="large">גדול</option>
            </select>
          </div>

          {/* Contrast Toggle */}
          <div className="mb-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={contrastMode}
                onChange={toggleContrastMode}
              />
              מצב ניגודיות גבוהה
            </label>
          </div>

          {/* Focus Ring Toggle */}
          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={showFocusOutline}
                onChange={toggleFocusOutline}
              />
              הדגש טבעות מיקוד
            </label>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
