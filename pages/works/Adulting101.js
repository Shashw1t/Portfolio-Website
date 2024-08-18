import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Adulting 101">
    <Container>
      <Title>
        Voice Commits <Badge>2024</Badge>
      </Title>
      <P>
      A VS Code extension enabling users to record and manage voice memos instead of long and lengthy git commit messages.
      <br></br>
      Utilised Node.js and SoX to automate recording functionality including file storage and metadata handling.
      </P>
      <br></br>
      Implemented an Express server for handling API requests.
      <P>

      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Shashw1t/Voice-Commits">
          Voice Commits <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>  
        <ListItem>
          <Meta>Visual Studio Marketplace</Meta>
          <Link href="https://marketplace.visualstudio.com/items?itemName=night-owl-labs.bee-heard">
          Visual Studio <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, Typescript, Node.js, SoX, Express, Docker, HTML, Tailwind CSS, Material UI</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/beeheard.png" alt="voice commits" />
      <WorkImage src="/images/works/voicecommit-preview.png" alt="voice commits" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
