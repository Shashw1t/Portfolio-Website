import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import sentinel from '../public/images/works/coms-home.png'
import voicecommits from '../public/images/works/voicecommits.png'
import summarizer from '../public/images/works/summarizer.png'
import hypership from '../public/images/works/Hypership-home.png'
import captcha from '../public/images/works/captcha.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="COMS" title="CryptoSentinel" thumbnail={sentinel}>
            A WebApp to monitor and deanonymize cryptocurrency wallets relating to illegal activities on the dark web.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="recaptcha" title="Re-captcha" thumbnail={captcha}>
            A passive, CAPTCHA-free bot detection system.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="Adulting101" title="Voice Commits" thumbnail={voicecommits}>
            A VS Code extension enabling users to record and manage voice memos.
          </WorkGridItem>
        </Section>


        <Section delay={0.1}>
          <WorkGridItem
            id="fakeface" title="Article Summarizer" thumbnail={summarizer}>
            A GPT powered Article Summarizer that summarizes any article on the internet through a URL input.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="handgesture" thumbnail={hypership} title="HyperShip">
          An Innovative platform that provides real-time and verifiable shipment location data outperforming traditional supply chain systems.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
