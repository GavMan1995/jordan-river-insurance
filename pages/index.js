import Header from '../components/Header'
import Footer from '../components/Footer'
import { Section, Aside, PicAnim } from '../styles/base'
import { LinkButton } from '../styles/components/buttons'

export default () => {
  return (
    <div>
      <Header />

      <Section hero>
        <img
          className='c-section-img'
          src='/static/elp-banner.png'
          alt='Jordan River Insurance' />
        <LinkButton
          target='_blank'
          href='http://calendly.com/jri/call'>
          Schedule a Consultation
        </LinkButton>
      </Section>

      <Section gray centerText>
        <h3 className='c-header-text'>
          <strong>Why Choose Jordan River Insurance?</strong>
        </h3>
        <h1 className='c-header-text'>You always get the best coverage for the best price</h1>
        <p><i>
           That's because we're an
          <strong>&nbsp;independent</strong> Auto, Home, Life, Health, &amp; Business
          Insurance agency. We shop <strong>more than 36 insurers</strong> to
          provide you with insurance tailored to your needs and phase of life.
        </i></p>
        <img
          className='c-section-img'
          src='/static/insurance-logos.png'
          alt='Jordan River Insurance' />
        <p><i>
          <strong>
            Save hundreds even thousand because we're not tied to one provider
          </strong>
        </i></p>
      </Section>

      <Section>
        <Aside lastOnMobile>
          <PicAnim>
            <img src='/static/match-1.png' />
          </PicAnim>
        </Aside>

        <Aside>
          <h1 className='c-header-text'>We Look ar your Risk Profile</h1>
          <h3 className='c-header-text'><i>
            We have 36 Provider partners, to choose from to fit your risk profile
          </i></h3>
          <p className='c-header-text'>
            Most people don't know that insurers charge different prices for
            the same service. Depending on if you're their ideal customer or not
            can cost you hundreds or thousands of dollars a year. Many people
            unknowingly pay high premiums because of a risk profile mismatch.
          </p>
          <p>
            The good news is that different providers have different ideal
            customers. We have access to more than 36 insurance providers
            and we match your risk profile to the best providers for you.
          </p>
        </Aside>
      </Section>

      <Section gray>
        <Aside textAlignRight>
          <h1 className='c-header-text'>We're your advocates.</h1>
          <h3 className='c-header-text'>
            Insurance can be confusing
          </h3>
          <p>
            Our loyalty is to you, the customer, not the insurance provider.
            We're here to be your advocates. Not sure your premiums will rise
            if you report that windshield replacement? Give us a call and we'll
            let you know if it's worth it. Unsure of how having a baby will affect
            your homeowners insurance? We'll help you find answers.
          </p>
        </Aside>

        <Aside>
          <img
            className='c-section-img'
            src='/static/lifesaver.png' />
        </Aside>
      </Section>

      <Footer />
    </div>
  )
}
