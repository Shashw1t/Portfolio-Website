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
    <Layout title="Re-captcha">
      <Container>
        <Title>
        Re-captcha <Badge>2024</Badge>
        </Title>
        <P>
        A passive, CAPTCHA-free bot detection solution that captures environmental parameters through user interactions. This solution uses machine learning models to differentiate between bots and human operators.
        <br></br> <br></br>
        Intuitive human-centered design, challenging for bots, using ensemble ML models with RNN architecture & statistical analysis & prediction techniques to effectively identify human versus bot interactions, adapting to evolving attack patterns.

        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/Captchured">
            Shashw1t<ExternalLinkIcon mx="2px"/>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Live ML endpoint</Meta>
            {/* <Link href="https://sentinel.redomic.in/"> */}
            Captchured API<ExternalLinkIcon mx="2px" />
            {/* </Link> */}
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Node.js, Express, Tensorflow, Python, numPy, matplotlib, HTML, CSS, Selenium</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Preview</Center>
        </Heading>
  
        <WorkImage src="/images/works/captcha-workflow.png" alt="Captchured" />
        <WorkImage src="/images/works/captcha-ml1.png" alt="Captchured" />
        <WorkImage src="/images/works/captcha-ml2.png" alt="Captchured"/>
      </Container>
    </Layout>
  )
  
  export default Projects
  export { getServerSideProps } from '../../components/chakra'
  