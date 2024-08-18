import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Hand Gesture Recognition">
    <Container>
      <Title>
      HyperShip <Badge>2023</Badge>
      </Title>
      <P>
      Created an Innovative platform empowering private supply & transport agencies to provide real-time and verifiable shipment location data through integrated smart contracts on ethereum.
      </P>
      <br></br>
      <P>
      Lead a team of three members, to tackle inefficiencies and vulnerabilities in traditional logistics systems while enhancing accountability and security throughout the supply chain.
      </P>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Shashw1t/HyperShip-2.0">
          HyperShip<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows,MacOS,Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Ethereum, Solidity, React, Node.js, MongoDB, AWS, Jest, Docker</span>
        </ListItem>
        
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      {/* <WorkImage src="/images/works/handgesture1.png" alt="handgesture" />
      <WorkImage src="/images/works/handgesture0.jpeg" alt="handgesture" />
      <WorkImage src="/images/works/handgesture2.jpeg" alt="handgesture" /> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
