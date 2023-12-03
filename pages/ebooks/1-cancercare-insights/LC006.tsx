import { PageLayout, Text, List, Image, LinkTo } from "../../../src/components";
import { ImageSize } from "../../../src/shared/enums";

const CaseStudy = () => {
  return (
    <PageLayout pagecentered>
      <Image src="/public/histology/6.png" size={ImageSize.SMALL} alt="" />
      <LinkTo
        href="https://histopathology-viewer.vercel.app/viewer6.html"
        passHref
        className="flex items-center justify-center rounded-md bg-blue-600 px-3 pb-3 my-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-2 md:mx-5 mx-3"
      >
        <span className="text-xl pt-2 block">View Slide</span>
      </LinkTo>
      <Text p>
        A 65-year-old patient diagnosed with lung cancer and their loved ones
        navigate the emotional and practical aspects of coping with a recent
        diagnosis. Gain insights into effective coping strategies and emotional
        support.
      </Text>

      <Text p>
        This case study offers an intimate portrayal of a 65-year-old patient
        diagnosed with lung cancer and their loved ones as they navigate the
        emotional and practical aspects of coping with a recent diagnosis. Key
        aspects covered in this case study include:
        <List>
          <li>
            <strong>Emotional Journey:</strong> Insights into the emotional
            challenges faced by the patient and their loved ones following the
            lung cancer diagnosis. The narrative captures moments of
            vulnerability, strength, and the evolving emotional landscape.
          </li>
          <li>
            <strong>Practical Coping Strategies:</strong> Exploration of
            effective coping strategies adopted by the patient and their support
            network. This includes practical approaches to managing treatment
            schedules, seeking emotional support, and fostering a supportive
            environment.
          </li>
          <li>
            <strong>Community and Emotional Support:</strong> Recognition of the
            importance of community and emotional support in enhancing the
            coping mechanisms of both the patient and their loved ones.
            Highlighting the role of communication and shared experiences in
            building resilience.
          </li>
        </List>
      </Text>

      <Text p>
        Following the inspiring story of this patient and their loved ones
        provides valuable insights into the multidimensional aspects of coping
        with a lung cancer diagnosis. The case study encourages empathy,
        understanding, and the cultivation of supportive environments for
        individuals and families facing similar challenges.
      </Text>
    </PageLayout>
  );
};

export default CaseStudy;
