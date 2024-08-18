import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Projects = () => (
  <Layout title="Crypto Sentinels">
    <Container>
      <Title>
      Crypto Sentinels <Badge>2023-</Badge>
      </Title>
      <P>
      Crypto Sentinels is a toolkit for government agencies to help them monitor and deanonymize cryptocurrency wallets related to illegal activities on the dark web. Based on problem statement SIH1445, 2023: De-anonymisation for monitoring & tracking of illegal activities performed using cryptocurrency transaction technology
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Shashw1t/Crypto-Sentinel-Server">
          Shashw1t<ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Live WebApp</Meta>
          <Link href="https://sentinel.redomic.in/">
          Crypto Sentinel<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Node.js, Express, Electron, AWS EC2, SciKit Learn, TensorFlow, MongoDB, Mongoose</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/Cryptosentinel.png" alt="CryptoSentinel" />
      <WorkImage src="/images/works/coms1.png" alt="CryptoSentinel" />
      <WorkImage src="/images/works/coms2.png" alt="CryptoSentinel"/>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../../components/chakra'
