import eventsData from './data.json';
import EventCard from '../../../components/eventsSection/EventsSection';
import Wrapper from '../../../components/Wrapper';

const EventsSection = () => {
  return (
    <div className="mx-auto ">
  
      <Wrapper>
        
        <div className="lg:py-[120px] text-centre py-[48px] ">
          
        <div className="text-center max-w-[683px] mx-auto">
            <p className="lg:text-[46px] lg:leading-[58.8px] text-[24px] leading-[30px] font-semibold lg:font-medium font-lora text-[#121212]">
              Our events
            </p>   
            <p className="lg:text-[18px] lg:leading-[27.5px] text-[14px] leading-[20px] lg:font-medium font-normal font-poppins text-[#707070]">
              Pirate ipsum arrgh bounty warp jack. Main shrouds round jack sink dock arr line gaff tea. Arr tea rum crimp gold yer jib sloop jib. Spanish anchor road furl.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-6 lg:py-[40px]">
          {eventsData.events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
        
      </Wrapper>
    </div>
  );
};

export default EventsSection;
