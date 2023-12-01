import Link from "next/link";
import { PageLayout, Text, List, Image, LinkTo } from "../../../src/components";
import { ImageSize } from "../../../src/shared/enums";

const Article = () => {
  return (
    <PageLayout blogcentered>
      <Image src="/public/images_histo/4.png" size={ImageSize.SMALL} alt="" />
      <LinkTo
        href="https://histopathology-viewer.vercel.app/viewer4.html"
        passHref
        className="flex items-center justify-center rounded-md bg-blue-600 px-3 pb-3 my-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-2 md:mx-5 mx-3"
      >
        <span className="text-xl pt-2 block">View Slide</span>
      </LinkTo>
      <Text p>
        A 55-year-old patient diagnosed with lung cancer shares insights into
        coping strategies and navigating life with a cancer diagnosis.
      </Text>

      <Text p>
        This case study provides a glimpse into the personal journey of a
        55-year-old individual diagnosed with lung cancer. The narrative
        revolves around the patient's experiences, coping mechanisms, and the
        emotional aspects of living with a cancer diagnosis.
      </Text>

      <Text p>
        Key aspects covered in this case study include:
        <List>
          <li>
            <strong>Coping Strategies:</strong> The patient discusses various
            coping strategies adopted to navigate the challenges posed by a lung
            cancer diagnosis. This includes emotional support, lifestyle
            adjustments, and finding strength in the face of adversity.
          </li>
          <li>
            <strong>Life Beyond Diagnosis:</strong> Insights into maintaining a
            fulfilling life beyond the diagnosis, embracing moments of joy, and
            fostering a positive outlook on the future.
          </li>
          <li>
            <strong>Support Systems:</strong> Recognition of the importance of
            support systems, both from healthcare professionals and personal
            networks, in enhancing the patient's quality of life and overall
            well-being.
          </li>
        </List>
      </Text>

      <Text p>
        The candid sharing of experiences in this case study aims to provide
        inspiration and valuable lessons for individuals facing similar
        challenges. It emphasizes the resilience and strength demonstrated by
        the patient in creating a meaningful life amidst the complexities of
        living with lung cancer.
      </Text>
    </PageLayout>
  );
};

export default Article;
