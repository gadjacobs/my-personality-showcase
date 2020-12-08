export default function PersonalityTrait({trait, percentage, name, color}) {
    return (

          <div class={`border-2 border-${color}-200 px-4 py-6 rounded-lg`}>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-${color}-600 bg-${color}-200`}>
                    {trait}
                  </span>
                </div>
                <div className="text-right">
                  <span className={`text-xs font-semibold inline-block text-${color}-600`}>
                    {percentage}
                  </span>
                </div>
              </div>
              <div className={`overflow-hidden h-2 mb-4 text-xs flex rounded bg-${color}-200`}>
                <div
                  style={{ width: percentage }}
                  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${color}-500`}
                ></div>
              </div>
            </div>
            <h2 className={`title-font font-medium text-2xl text-${color}-600`}>
              {name}
            </h2>
          </div>
    );
  }
