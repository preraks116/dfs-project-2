import Link from "next/link";
import {
  PageLayout,
  Text,
  List,
  Image,
  LinkTo,
  Seperator,
  Slider,
} from "../../../src/components";
import CodeBlock from "../../../src/components/CodeBlock";
import {
  HowToUseImageCode,
  HowToUseList,
  HowToUseSeperator,
  HowToUseTextCode,
} from "../../../src/constants/codeBlocks";
import { ImageSize } from "../../../src/shared/enums";

const Article = () => {
  return (
    <PageLayout blogcentered>
      <Image
        src="../../../public/images_histo/1.png"
        size={ImageSize.SMALL}
        alt=""
      />
      <LinkTo
        href="https://histopathology-viewer.vercel.app/viewer.html"
        passHref
        className="flex items-center justify-center rounded-md bg-blue-600 px-3 pb-3 my-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-2 md:mx-5 mx-3"
      >
        <span className="text-xl pt-2 block">View Slide</span>
      </LinkTo>
      <Text p>
        A 83-year-old lady presented with a 14mm malignant lesion in the right
        breast. There is a history of cosmetic breast implants. Unfortunately,
        the previous biopsy result is not available. Given the clinical
        scenario, the patient underwent a simple right-sided mastectomy with
        axillary node sampling and removal over implants.
      </Text>

      <Text p>
        Surgical specimens obtained include:
        <List>
          <li>Specimen A: Mastectomy</li>
          <li>Specimen B: Lymph nodes from axillary clearance</li>
        </List>
      </Text>

      <Text p>
        This case poses unique challenges and considerations, and a
        comprehensive examination of the obtained specimens will contribute to a
        better understanding of the diagnosis and treatment options.
      </Text>
    </PageLayout>
  );
};

export default Article;
