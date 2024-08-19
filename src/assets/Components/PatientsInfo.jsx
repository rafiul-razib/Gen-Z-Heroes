import { useState } from "react";

const PatientsInfo = () => {
  const [woundedStatus, setWoundedStatus] = useState("Martyred");

  const handleWoundedStatus = (event) => {
    setWoundedStatus(event.target.value);
  };

  //   console.log(woundedStatus);

  const handleSubmitMartyredHero = (e) => {
    e.preventDefault();
    const form = e.target;
    const hero_name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const father = form.father.value;
    const mother = form.mother.value;
    const permanent_address = form.permanent_address.value;
    const photo_martyred = form.photo_martyred.value;

    const income_family = form.income_family.value;
    const bank_details = form.bank_details.value;
    const bkash_nagad_rocket = form.bkash_nagad_rocket.value;

    const martyred_hero_details = {
      hero_name,
      phone,
      email,
      father,
      mother,
      permanent_address,
      photo_martyred,
      income_family,
      bank_details,
      bkash_nagad_rocket,
    };
    console.log(martyred_hero_details);
  };

  const handleSubmitWoundedHero = (e) => {
    e.preventDefault();
    const form = e.target;
    const hero_name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const father = form.father.value;
    const mother = form.mother.value;
    const permanent_address = form.permanent_address.value;

    // wounded
    const photo_wounded_present = form.photo_wounded_present.value;
    const photo_before_wounded = form.photo_before_wounded.value;
    const wounded_location = form.wounded_location.value;
    const wounded_body_area = form.wounded_body_area.value;
    const kind_of_injury = form.kind_of_injury.value;
    const hospital_name = form.hospital_name.value;
    const hospital_status = form.hospital_status.value;
    const hospital_address = form.hospital_address.value;
    const ward_cabin = form.ward_cabin.value;
    const bed_number = form.bed_number.value;
    const floor_level = form.floor_level.value;
    const attendee_name = form.attendee_name.value;
    const attendee_mobile = form.attendee_mobile.value;
    // wounded
    const income_family = form.income_family.value;
    const bank_details = form.bank_details.value;
    const bkash_nagad_rocket = form.bkash_nagad_rocket.value;

    const wounded_hero_details = {
      hero_name,
      phone,
      email,
      father,
      mother,
      permanent_address,
      photo_wounded_present,
      photo_before_wounded,
      wounded_location,
      wounded_body_area,
      kind_of_injury,
      hospital_name,
      hospital_status,
      hospital_address,
      ward_cabin,
      bed_number,
      floor_level,
      attendee_name,
      attendee_mobile,
      income_family,
      bank_details,
      bkash_nagad_rocket,
    };
    console.log(wounded_hero_details);
  };

  return (
    <div className="pt-16">
      <div className="bg-base-200 min-h-screen">
        <div className="hero-content">
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <div className="flex justify-around pt-12">
              <div className="flex justify-center items-center">
                <label className="label">
                  <span className="label-text">Martyred</span>
                </label>
                <input
                  type="radio"
                  name="radio-4"
                  value="Martyred"
                  className="radio radio-accent"
                  onChange={handleWoundedStatus}
                  defaultChecked
                />
              </div>
              <div className="flex justify-center items-center">
                <label className="label">
                  <span className="label-text">Wounded</span>
                </label>
                <input
                  type="radio"
                  name="radio-4"
                  value="Wounded"
                  className="radio radio-accent"
                  onChange={handleWoundedStatus}
                />
              </div>
            </div>
            {/* Martyred-hero-form */}
            <div
              className={`${
                woundedStatus === "Martyred" ? "block" : "hidden"
              } `}
            >
              <form onSubmit={handleSubmitMartyredHero} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Father</span>
                  </label>
                  <input
                    type="text"
                    name="father"
                    placeholder="Father's Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Mother</span>
                  </label>
                  <input
                    type="text"
                    name="mother"
                    placeholder="Mother's Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Permanent Address</span>
                  </label>
                  <input
                    type="text"
                    name="permanent_address"
                    placeholder="Permanent Address"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Present Address</span>
                  </label>
                  <input
                    type="text"
                    name="present_address"
                    placeholder="Present Address"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div
                  className={`form-control ${
                    woundedStatus === "Martyred" ? "block" : "hidden"
                  }`}
                >
                  <label className="label">
                    <span className="label-text">Photo of the Martyred </span>
                  </label>
                  <input
                    type="file"
                    name="photo_martyred"
                    className="file-input file-input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Family Gross Income</span>
                  </label>
                  <input
                    type="number"
                    name="income_family"
                    placeholder="Monthly Gross Income in BDT"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Bank Account Details</span>
                  </label>
                  <input
                    type="text"
                    name="bank_details"
                    placeholder="Bank Account Details"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Bkash / Nagad/ Rocket Details
                    </span>
                  </label>
                  <input
                    type="text"
                    name="bkash_nagad_rocket"
                    placeholder="Bkash / Nagad/ Rocket Details"
                    className="input input-bordered"
                    required
                  />
                </div>

                <button
                  className="btn btn-md glass bg-accent text-white"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Wounded-hero-form */}
            <div
              className={`${woundedStatus === "Wounded" ? "block" : "hidden"} `}
            >
              <form onSubmit={handleSubmitWoundedHero} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Father</span>
                  </label>
                  <input
                    type="text"
                    name="father"
                    placeholder="Father's Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Mother</span>
                  </label>
                  <input
                    type="text"
                    name="mother"
                    placeholder="Mother's Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Permanent Address</span>
                  </label>
                  <input
                    type="text"
                    name="permanent_address"
                    placeholder="Permanent Address"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Present Address</span>
                  </label>
                  <input
                    type="text"
                    name="present_address"
                    placeholder="Present Address"
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* WOUNDED */}
                <div>
                  <div className="divider divider-warning"></div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Wounded in Location</span>
                    </label>
                    <select
                      className="select select-bordered w-full max-w-md"
                      required
                      name="wounded_location"
                    >
                      <option disabled selected>
                        Location
                      </option>
                      <option>Kazla</option>
                      <option>Jatrabari</option>
                      <option>Shahbag</option>
                      <option>Uttara</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Wounded Area</span>
                    </label>
                    <select
                      className="select select-bordered w-full max-w-md"
                      required
                      name="wounded_body_area"
                    >
                      <option disabled selected>
                        Wounded Area
                      </option>
                      <option>Head</option>
                      <option>Hand</option>
                      <option>Leg</option>
                      <option>Eyes</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Kind of Injury</span>
                    </label>
                    <select
                      className="select select-bordered w-full max-w-md"
                      required
                      name="kind_of_injury"
                    >
                      <option disabled selected>
                        Kind of Injury
                      </option>
                      <option>Bullet</option>
                      <option>Rubber-bullet</option>
                      <option>Tear Gas</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Hospital Name</span>
                    </label>
                    <input
                      type="text"
                      name="hospital_name"
                      placeholder="Hospital Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Hospital Status</span>
                    </label>
                    <select
                      className="select select-bordered w-full max-w-md"
                      name="hospital_status"
                    >
                      <option disabled selected>
                        Hospital Status
                      </option>
                      <option>Public</option>
                      <option>Private</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Hospital Address</span>
                    </label>
                    <input
                      type="text"
                      name="hospital_address"
                      placeholder="Hospital Address"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Ward/Cabin Number</span>
                    </label>
                    <input
                      type="text"
                      name="ward_cabin"
                      placeholder="Ward/Cabin Number"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Bed Number</span>
                    </label>
                    <input
                      type="text"
                      name="bed_number"
                      placeholder="Bed Number"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Floor/Level</span>
                    </label>
                    <input
                      type="text"
                      name="floor_level"
                      placeholder="Floor/Level"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Attendee name</span>
                    </label>
                    <input
                      type="text"
                      name="attendee_name"
                      placeholder="Attendee name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Attendee Mobile</span>
                    </label>
                    <input
                      type="number"
                      name="attendee_mobile"
                      placeholder="Attendee Mobile"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo (Present) </span>
                    </label>
                    <input
                      type="file"
                      name="photo_wounded_present"
                      className="file-input file-input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Photo (Before Wounded){" "}
                      </span>
                    </label>
                    <input
                      type="file"
                      name="photo_before_wounded"
                      className="file-input file-input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="divider divider-warning"></div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Family Gross Income</span>
                  </label>
                  <input
                    type="number"
                    name="income_family"
                    placeholder="Monthly Gross Income in BDT"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Bank Account Details</span>
                  </label>
                  <input
                    type="text"
                    name="bank_details"
                    placeholder="Bank Account Details"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Bkash / Nagad/ Rocket Details
                    </span>
                  </label>
                  <input
                    type="text"
                    name="bkash_nagad_rocket"
                    placeholder="Bkash / Nagad/ Rocket Details"
                    className="input input-bordered"
                    required
                  />
                </div>

                <button
                  className="btn btn-md glass bg-accent text-white"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsInfo;
