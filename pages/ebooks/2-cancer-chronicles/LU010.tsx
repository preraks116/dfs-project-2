import { PageLayout, Text, List, Image, LinkTo } from "../../../src/components";
import { ImageSize } from "../../../src/shared/enums";

/**
 * @description renders a case study page
 * @returns a case study page
 */
const CaseStudy = () => {
  return (
    <PageLayout pagecentered>
      <Image src="/public/histology/10.png" size={ImageSize.SMALL} alt="" />
      <LinkTo
        href="https://histopathology-viewer.vercel.app/viewer10.html"
        passHref
        className="flex items-center justify-center rounded-md bg-blue-600 px-3 pb-3 my-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-2 md:mx-5 mx-3"
      >
        <span className="text-xl pt-2 block">View Slide</span>
      </LinkTo>
      <Text p>
        A 65-year-old patient diagnosed with lung cancer shares insights into
        coping strategies and navigating life with a cancer diagnosis.
      </Text>

      <Text p>
        This case study delves into the life of a 65-year-old patient diagnosed
        with lung cancer, providing valuable insights into coping strategies and
        navigating life with a cancer diagnosis. Key aspects covered in this
        case study include:
        <List>
          <li>
            <strong>Coping Strategies:</strong> Exploration of the coping
            strategies adopted by the patient to navigate the challenges posed
            by a lung cancer diagnosis. Insights into emotional resilience,
            support networks, and maintaining quality of life.
          </li>
          <li>
            <strong>Navigating Life:</strong> A narrative that explores how the
            patient actively navigates various aspects of life post-diagnosis,
            including daily routines, social interactions, and participation in
            meaningful activities.
          </li>
          <li>
            <strong>Emotional Support:</strong> Recognition of the importance of
            emotional support in the patient's journey, with a focus on the role
            of family, friends, and healthcare professionals in providing
            encouragement and comfort.
          </li>
        </List>
      </Text>

      <Text p>
        Gaining valuable insights into the life of this 65-year-old patient
        diagnosed with lung cancer provides a deeper understanding of the
        emotional and practical dimensions of living with a cancer diagnosis.
        The case study encourages empathy, support, and the cultivation of a
        compassionate healthcare environment.
      </Text>
    </PageLayout>
  );
};

export default CaseStudy;
