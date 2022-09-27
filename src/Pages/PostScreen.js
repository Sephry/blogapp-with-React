import Paragraph from "../Components/PostScreenComponents/Paragraph";
import PostProfileCard from "../Components/PostScreenComponents/PostProfileCard";
import QuotationText from "../Components/PostScreenComponents/QuotationText";
import PostTitle from "../Components/PostScreenComponents/PostTitle";
import SecondHeader from "../Components/PostScreenComponents/SecondHeader";
import MainHeader from "../Components/PostScreenComponents/MainHeader";

export default function PostScreen(params) {
  return (
    <main className="mt-10">

      <PostTitle />

      <div className="mb-4 md:mb-0 w-full mx-auto relative">
        <div className="px-4 lg:px-0">
          <a className="py-2 text-green-700 inline-flex items-center justify-center mb-2">
            Cryptocurrency
          </a>
        </div>

        <img
          src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          className="w-full object-cover lg:rounded h-96"
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">

          <MainHeader />

          <Paragraph />
          <Paragraph />

          <QuotationText />
          <Paragraph />

          <SecondHeader />

          <Paragraph />
          <Paragraph />

          <QuotationText />

          <Paragraph />
          <Paragraph />

        </div>

        <PostProfileCard />

      </div>
    </main>
  );
}