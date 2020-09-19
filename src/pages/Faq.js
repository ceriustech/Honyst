import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  max-height: calc(100vh - 64px);
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
const Card = styled.div`
  box-sizing: border-box;
  width: 60%;
  padding: 32px;
`;
const Question = styled.h4``;
const Answer = styled.p``;

function Faq() {
  return (
    <Layout>
      <h1>FAQ</h1>
      <Card>
        <Question>Proin vel ullamcorper sem Vestibulum?</Question>
        <Answer>
          Morbi varius sed est sed posuere. Proin interdum blandit metus eu
          porttitor. Mauris a suscipit libero, eu laoreet nibh. Fusce dictum est
          vitae lobortis sodales. Donec vitae bibendum purus. Nam id semper
          risus. Aliquam aliquet metus eget risus dapibus fermentum. Etiam orci
          sapien, eleifend a pretium sit amet, sodales vel urna. Donec porttitor
          aliquam metus id pretium. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas.
        </Answer>
      </Card>
      <Card>
        <Question>Etiam ut risus augue In?</Question>
        <Answer>
          Sed sit amet ipsum faucibus, placerat enim eu, interdum nunc. Ut
          iaculis sollicitudin dictum. Pellentesque eget ornare ipsum. Nulla
          cursus condimentum lacinia. Nulla facilisi. Donec tempus metus libero.
          Suspendisse venenatis volutpat lacus. Cras auctor libero id ex viverra
          vulputate. Proin efficitur orci massa, ut viverra lorem suscipit
          aliquam. Ut scelerisque augue felis, sit amet sagittis augue porttitor
          ut. Etiam tempor odio dolor, et ullamcorper ante hendrerit congue.
          Mauris lobortis aliquet magna, vestibulum rutrum lacus convallis et.
          Proin ut mauris et leo placerat aliquam non non diam.
        </Answer>
      </Card>
      <Card>
        <Question>Suspendisse potenti? Donec accumsan auctor?</Question>
        <Answer>
          In hac habitasse platea dictumst. Curabitur finibus tincidunt erat
          eget malesuada. Nam et malesuada tellus. Maecenas erat libero, dapibus
          sed elit eu, malesuada varius sapien. Pellentesque condimentum
          dignissim neque nec pulvinar. Donec accumsan, sapien at congue
          elementum, leo metus malesuada tellus, quis accumsan dolor est nec
          nibh. Mauris ut sodales dui. Vestibulum luctus nibh ac laoreet
          egestas. Curabitur lorem odio, ullamcorper eu vulputate ac, pharetra
          non erat. Sed ac nibh congue, imperdiet diam ac, ultrices diam. Fusce
          faucibus posuere nunc quis condimentum. Praesent eu vestibulum dui, in
          mollis erat. Vestibulum ac arcu vel risus malesuada ullamcorper at nec
          nisl.
        </Answer>
      </Card>
      <Card>
        <Question>Donec mollis accumsan justo, eu?</Question>
        <Answer>
          Vivamus euismod eros sem, ac dignissim purus efficitur vel. Praesent
          congue in lacus sed viverra. Phasellus pretium, ex gravida tincidunt
          feugiat, turpis velit consequat nulla, ac suscipit sem metus vitae
          arcu. Suspendisse eget accumsan diam, vel ornare leo. Praesent
          bibendum tristique mi, sed suscipit sem gravida non. Vivamus at
          sagittis nisi, vitae fringilla mauris. Mauris consequat nisi non purus
          ornare sollicitudin. Sed a massa at ipsum rhoncus maximus at nec
          massa. Phasellus elementum dignissim erat, vitae ullamcorper lorem.
        </Answer>
      </Card>
      <Card>
        <Question>Morbi sit amet lectus eu?</Question>
        <Answer>
          Curabitur nec bibendum tellus, sit amet pharetra ex. Vivamus volutpat
          nibh et enim laoreet, sit amet mattis augue vehicula. Praesent non
          pulvinar odio, eu placerat leo. Integer et tortor cursus, ornare sem
          sit amet, vulputate est. Pellentesque nec vehicula ligula. Integer
          vitae magna eget dolor aliquet tempus. Quisque quis magna leo. Morbi a
          nunc a eros feugiat tristique id ac lectus. Phasellus vel ipsum sed
          nunc volutpat cursus. Integer elementum dolor id dictum feugiat.
          Aliquam non condimentum urna. Etiam sollicitudin massa posuere
          convallis euismod. Morbi sed est metus. Integer sed consectetur metus.
          Quisque ultrices fringilla turpis, vel fermentum ipsum. Aliquam
          interdum, erat id sollicitudin sagittis, orci neque fermentum velit,
          eu sollicitudin eros nunc sit amet lacus.
        </Answer>
      </Card>
    </Layout>
  );
}
export default Faq;
