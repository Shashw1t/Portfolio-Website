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
      Created a Redux store to manage and enhance all the complex state management techniques
      ensuring seamless feature addition and enhancements
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Live Website</Meta>
          <Link href="https://colab.research.google.com/drive/1ADxLFP-0gfAEh5ko93C3KlKpBNJEaTrV?usp=sharing">
          Article Summarizer<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Google Colab</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Tensorflow, Keras, Deep Learning model with CNN</span>
        </ListItem>
  
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/fakeface1.png" alt="fakeface" />
      <WorkImage src="/images/works/faceface2.png" alt="fakeface" />
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
