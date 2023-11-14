import styled from "styled-components";
import { Card } from "../components/card";

const StyledWrapper = styled.div`
  background: #ff5500;
  display: flex;
  padding: 40px;
`;
const Title = styled.h2`
  color: white;
  font-size: 96px;
  font-weight: 600;
  letter-spacing: 1.2rem;
  flex-shrink: 0;
`;

const CardWrapper = styled.div`
  max-width: 500px;
  justify-content: space-evenly;
`;

const Row = styled.p`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &:not(:last-child) {
   margin-bottom:20px;
  }
`;

const Label = styled.span`
  font-size: 28px;
  font-weight: 600;
  color: black;
  flex-shrink: 0;
  letter-spacing:0.2rem;
`;

const Content = styled.span`
  font-size: 21px;
  color: black;
  display: flex;
  align-items: center;
  letter-spacing:0.2rem;
  flex-wrap:wrap;
  line-height:1.5;
`;

export function Introduction() {
  return (
    <StyledWrapper>
      <Title>我愛喵</Title>
      <CardWrapper>
        <Card theme="secondary">
          <div>
            <Row>
              <Label>名字：</Label>
              <Content> 喵立翰 (Miao Li-Han)</Content>
            </Row>
            <Row>
              <Label>政黨：</Label>
              <Content>人道黨</Content>
            </Row>
            <Row>
              <Content>
                支持貓咪權益的立場：喵立翰立法委員長期以來一直是動物權益的堅定支持者，特別關心貓咪的福祉。
              </Content>
            </Row>
            <Row>
              <Label> 政治經驗：</Label>
              <Content>
                喵立翰在國會有超過20年的政治經驗，曾主持多個相關委員會。
              </Content>
            </Row>
            <Row>
              <Label>立法成就：</Label>
              <Content>
                他成功通過多項法案，包括禁止虐待貓咪和改善動物收容所條件。
              </Content>
            </Row>
            <Row>
              <Label>社區參與：</Label>
              <Content>
                喵立翰積極參與動物保護和貓咪領養的社區活動。 未來議程：
                他將繼續推動法案，提高貓咪的權益，改進動物福祉。
              </Content>
            </Row>
          <Row>
            <Label>未來議程：</Label>
            <Content>他將繼續推動法案，提高貓咪的權益，改進動物福祉。</Content>
          </Row>
 
          </div>
        </Card>
      </CardWrapper>
    </StyledWrapper>
  );
}
