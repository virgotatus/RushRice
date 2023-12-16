import Avatar from "./_components/(ex)/avatar";
import Box from "./_components/(ex)/box";
import Grid from "./_components/grid";
import Responsive from "./_components/(ex)/responsive";
import Animation from "./_components/(ex)/animation";
import LinkArrow from "./_components/(ex)/linkArrow";
import Badge from "./_components/Badge";
import Lists from "./_components/(ex)/Lists";
import Buttons from "./_components/(ex)/Buttons";
import Testimonial from "./_components/Testimonial";
import ExText from "./_components/ExText";
import Plan from "./_components/Plan";

const Example = () => {
  return (
    <>
      <Box></Box>
      <Avatar></Avatar>
      <Grid />
      <Responsive />
      <ExText />
      <img className="react-img" src="src/assets/react.svg" alt="react"></img>
      <Animation />
      <LinkArrow />
      <Badge text="100% OFF" />
      <Badge text=".sg $7.91" />
      <Lists />
      <Buttons />
      <Plan />
      <Testimonial />
    </>
  );
};

export default Example;
