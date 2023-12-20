import { Language } from "../../i18n/lang";
import { StyledText } from "./styles";
import { CustomSwitcher } from "./CustomSwitcher";

export const LanguageSwitcher = (): JSX.Element => {
  return (
    <div style={{ display: "flex", width: "50px" }}>
      <CustomSwitcher label="EN" value={Language.EN} />
      <StyledText>/</StyledText>
      <CustomSwitcher label="DE" value={Language.DE} />
    </div>
  );
};
