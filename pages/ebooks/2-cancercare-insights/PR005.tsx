import { PageLayout, Text, List, Image, LinkTo } from "../../../src/components";
import { ImageSize } from "../../../src/shared/enums";

const Article = () => {
  return (
    <PageLayout blogcentered>
      <Image src="/public/images_histo/5.png" size={ImageSize.SMALL} alt="" />
      <LinkTo
        href="https://histopathology-viewer.vercel.app/viewer5.html"
        passHref
        className="flex items-center justify-center rounded-md bg-blue-600 px-3 pb-3 my-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-2 md:mx-5 mx-3"
      >
        <span className="text-xl pt-2 block">View Slide</span>
      </LinkTo>
      <Text p>
        A 60-year-old patient diagnosed with prostate cancer advocates for
        awareness. Learn about the importance of early detection and spreading
        awareness.
      </Text>

      <Text p>
        This case study sheds light on the advocacy journey of a 60-year-old
        patient diagnosed with prostate cancer, highlighting the significance of
        early detection and the importance of spreading awareness. Key aspects
        covered in this case study include:
        <List>
          <li>
            <strong>Diagnosis and Advocacy:</strong> The patient's personal
            journey from diagnosis to becoming an advocate for prostate cancer
            awareness. Insight into the challenges faced and the motivation to
            raise awareness.
          </li>
          <li>
            <strong>Importance of Early Detection:</strong> Emphasis on the
            critical role of early detection in improving outcomes for prostate
            cancer patients. Information on screening methods and the benefits
            of early intervention.
          </li>
          <li>
            <strong>Advocacy Initiatives:</strong> Details on the patient's
            initiatives to spread awareness about prostate cancer, engage with
            communities, and encourage proactive health practices.
          </li>
        </List>
      </Text>

      <Text p>
        Joining the advocacy journey of this patient provides valuable insights
        into the broader impact of raising awareness about prostate cancer. The
        case study encourages individuals to prioritize their health, seek
        timely screenings, and actively participate in initiatives that
        contribute to community well-being.
      </Text>
    </PageLayout>
  );
};

export default Article;
