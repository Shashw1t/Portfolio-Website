import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m Shashwat
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Shashwat Dwivedi
          </Heading>
          <p>3rd year B.Tech. CSE undergrad (Full Stack Developer)</p>
        </Box>
        {/* <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box> */}
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
        I'm a Computer Science undergraduate, currently in my 3rd year. 
        <br></br>
        I like to work on highly scalable projects that provide solutions to real world problems.
          <br></br>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>2024</BioYear>
          Software Engineer, Intern | NHDC Limited
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Backend Developer, Freelance | Lazeez Hakeem
        </BioSection>
        {/* <BioSection>
          <BioYear>2022</BioYear>
          Member of Publicity Team, Xpecto (Technical Fest, IIT Mandi)
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Started Working as WebD head at MTB Club, IIT Mandi
        </BioSection> */}
        
      </Section>

      {/* <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥ 
        </Heading>
        <Paragraph>
          Coding, <text style={{ color: "pink" }}>Music</text>,{' '}
          Movies
          , <text style={{ color: "pink" }}>Treking</text>,{' '}Photography, Machine Learning
        </Paragraph>
      </Section> */}

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Achievements
        </Heading>
        <li><section>Finalist: Smart India Hackathon (SIH 2023)</section></li>
        <li><section>Competitive Programming: Rated Pupil on Codeforces (1300+ rating)</section></li>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Shashw1t" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                Shashw1t
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/shashwatdwivedi2610/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Shashwat Dwivedi
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="https://drive.google.com/file/d/1qR6wfZYLxlU959gx5-rrjSINdtdMNyS3/view?usp=drive_link" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            <a href="https://drive.google.com/file/d/1wjmUt-RZp_z2X6WT_jvlxvkFAw0NJlu2/view?usp=drive_link">Download Resume</a> 
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
