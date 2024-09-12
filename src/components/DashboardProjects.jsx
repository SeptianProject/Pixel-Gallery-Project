import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import CardDetailAction from "./cards/CardDetailAction";
import { BounceInLeft } from "./animations/BounceAnimate";
import CardTask from "./cards/CardTask";
import { useState } from "react";

const DashboardProjects = () => {
  const [arrowClick, setArrowClick] = useState(0);
  const minClick = -1;
  const maxClick = 0;

  const handleArrowClick = (direction) => {
    if (direction === 'left' && arrowClick > minClick || arrowClick === maxClick) {
      setArrowClick(arrowClick - 1);
    } else if (direction === 'right' && arrowClick < maxClick || arrowClick === minClick) {
      setArrowClick(arrowClick + 1);
    }
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <BounceInLeft delayVal={0.5}>
          <h1
            className="text-dark font-bold text-3xl">
            {arrowClick === -1 ? 'Your Projects' : 'Your Tasks'}
          </h1>
        </BounceInLeft>
        <div className="flex items-center gap-x-1">
          <ChevronLeftCircle
            onClick={() => handleArrowClick('left')}
            className="text-dark hover:text-white rounded-full hover:bg-hijau cursor-pointer transition-all duration-300"
            size={50}
            strokeWidth={1} />
          <ChevronRightCircle
            onClick={() => handleArrowClick('right')}
            className="text-dark hover:text-white rounded-full hover:bg-hijau cursor-pointer transition-all duration-300"
            size={50}
            strokeWidth={1} />
        </div>
      </div>
      <div className="relative mt-10 select-none">
        <div className={`
          w-full h-[30rem] overflow-y-scroll md:grid md:grid-cols-2 md:gap-x-5`}>
          {arrowClick === 0 ?
            <>
              <CardTask maxWDesk={'max-w-[320px]'} />
              <CardTask maxWDesk={'max-w-[320px]'} />
              <CardTask maxWDesk={'max-w-[320px]'} />
              <CardTask maxWDesk={'max-w-[320px]'} />
              <CardTask maxWDesk={'max-w-[320px]'} />
              <CardTask maxWDesk={'max-w-[320px]'} />
              <CardTask maxWDesk={'max-w-[320px]'} />
              <CardTask maxWDesk={'max-w-[320px]'} />
              <CardTask maxWDesk={'max-w-[320px]'} />
              <CardTask maxWDesk={'max-w-[320px]'} />
              <CardTask maxWDesk={'max-w-[320px]'} />
            </>
            :
            <>
              <CardDetailAction />
              <CardDetailAction />
              <CardDetailAction />
              <CardDetailAction />
              <CardDetailAction />
              <CardDetailAction />
              <CardDetailAction />
              <CardDetailAction />
              <CardDetailAction />
              <CardDetailAction />
              <CardDetailAction />
              <CardDetailAction />
            </>
          }
        </div>
      </div >
    </>
  );
};

export default DashboardProjects;
