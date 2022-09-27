import Paragraph from "../Components/PostScreenComponents/Paragraph";
import PostProfileCard from "../Components/PostScreenComponents/PostProfileCard";
import QuotationText from "../Components/PostScreenComponents/QuotationText";
import PostTitle from "../Components/PostScreenComponents/PostTitle";
import PostHeadlineSmall from "../Components/PostScreenComponents/PostHeadlineSmall";
import PostHeadlineBig from "../Components/PostScreenComponents/PostHeadlineBig";
import PostHeader from "../Components/PostScreenComponents/PostHeader";

export default function PostScreen(params) {
  return (
    <main className="mt-10">

      <PostTitle />

      <PostHeader />

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">

          <PostHeadlineBig />

          <Paragraph />
          <Paragraph />

          <QuotationText />
          <Paragraph />

          <PostHeadlineSmall />

          <Paragraph />
          <Paragraph />

          <QuotationText />

          <PostHeadlineSmall />

          <Paragraph />
          <Paragraph />

        </div>

        <PostProfileCard />

      </div>
    </main>
  );
}