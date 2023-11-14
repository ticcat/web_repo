import ContactFooter from "@/components/ContactSections/ContactFooter/ContactFooter";
import Studies from "@/components/StudiesWorkSections/Studies/Studies";
import StudiesWorkLanding from "@/components/StudiesWorkSections/StudiesWorkLanding/StudiesWorkLanding";
import Work from "@/components/StudiesWorkSections/Work/Work";

export default function StudiesNExp() {
  return (
    <>
      <StudiesWorkLanding></StudiesWorkLanding>
      <Studies></Studies>
      <Work></Work>
      <ContactFooter></ContactFooter>
    </>
  );
}