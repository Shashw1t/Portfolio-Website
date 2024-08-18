import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Fake Face Classifier">
    <Container>
      <Title>
        Article Summarizer<Badge>2024</Badge>
      </Title>
      <P>
      With the power of OpenAI GPT-4, Get your Articles summarized accurately and precisely in a click.
      </P>
      <br></br>
      <P>
      Created the API endpoints and a Redux store to manage all the complex state management techniques ensuring seamless feature addition and enhancements.
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Live Website</Meta>
          <Link href="https://summarizer.shashw1t.in/">
          Article Summarizer<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
        <Meta>GitHub</Meta>
          <Link href="https://github.com/Shashw1t/URL_Summarizer">
          Shashw1t<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, OpenAI, RapidAPI, Redux, Tailwind CSS</span>
        </ListItem>
  
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/summarizer1.png" alt="Summarizer" />
      <WorkImage src="/images/works/summarizer2.png" alt="Summarizer" />
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
