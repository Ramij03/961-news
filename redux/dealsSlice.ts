import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the deal interface
export interface Deal {
  id: string;
  title: string;
  location: string;
  tags: string[];
  type: string;
  category: string;
  points: number;
  rating: number;
  image: string;
}

// Define the featured interface
export interface Feature {
  id: string;
  title: string;
  category: string;
  image: string;
}

// Define the state interface
interface DealsState {
  popular: Deal[];
  featured: Feature[];
  doublePoints: Deal[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Initial state
const initialState: DealsState = {
  popular: [],
  featured: [],
  doublePoints: [],
  status: "idle",
  error: null,
};

// Dummy data for deals (popular & double points)
const dummyDeals: Deal[] = [
  {
    id: "1",
    title: "Grill Katz",
    location: "Mar Mikhael Achrafieh",
    type: "Restaurant",
    category: "Steakhouse",
    tags: ["2:1 Main Course", "10% Off Bill", "Popular"],
    points: 200,
    rating: 4.5,
    image: "https://s3-alpha-sig.figma.com/img/7207/4c8f/dd81aa3fb59fb8b9d6138bef673dafac?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ovGYxbOJxN1jKPC7DY4X-At4HxCu11b2VTVji72VtB1xMeGlkF11WAEmX4YEspceq4bJ3GJmGgqrNjME0VREmWLzgjbOtbtM9kFPE5tXsPSchG6tAo11JN7Yj7~yapIyH3pHR0FWnh2-fRgdXyQRbL-1AjOU9UBQJpNQx1neydHH2to~DdfFoZS0yaZtMfgI7TsT4uS2rTcm7NjrcfxU5HmUeqduhNO4m-dqISHmFB6mUzO12tsBftbyK7p00VP9SMtYUptYWgVBHoqIyzT4LBdDVn34JWLAeaAkvCkEnGK1BqH0WlJaH8dY5hxZ~MpkdRg0oMEvrcPL33jHk1MSmw__",
  },
  {
    id: "2",
    title: "Buy 1 Get 1 Free on T-Shirts",
    location: "Los Angeles",
    type: "Retail",
    category: "Clothing",
    tags: ["BOGO", "Clothing", "Hot Deal"],
    points: 150,
    rating: 4.8,
    image: "https://s3-alpha-sig.figma.com/img/7207/4c8f/dd81aa3fb59fb8b9d6138bef673dafac?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ovGYxbOJxN1jKPC7DY4X-At4HxCu11b2VTVji72VtB1xMeGlkF11WAEmX4YEspceq4bJ3GJmGgqrNjME0VREmWLzgjbOtbtM9kFPE5tXsPSchG6tAo11JN7Yj7~yapIyH3pHR0FWnh2-fRgdXyQRbL-1AjOU9UBQJpNQx1neydHH2to~DdfFoZS0yaZtMfgI7TsT4uS2rTcm7NjrcfxU5HmUeqduhNO4m-dqISHmFB6mUzO12tsBftbyK7p00VP9SMtYUptYWgVBHoqIyzT4LBdDVn34JWLAeaAkvCkEnGK1BqH0WlJaH8dY5hxZ~MpkdRg0oMEvrcPL33jHk1MSmw__",
  },
  {
    id: "3",
    title: "Exclusive Pizza Offer",
    location: "New York",
    type: "Restaurant",
    category: "Pizzeria",
    tags: ["Exclusive", "Offer", "Hot Deal"],
    points: 250,
    rating: 4.7,
    image: "https://s3-alpha-sig.figma.com/img/7207/4c8f/dd81aa3fb59fb8b9d6138bef673dafac?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ovGYxbOJxN1jKPC7DY4X-At4HxCu11b2VTVji72VtB1xMeGlkF11WAEmX4YEspceq4bJ3GJmGgqrNjME0VREmWLzgjbOtbtM9kFPE5tXsPSchG6tAo11JN7Yj7~yapIyH3pHR0FWnh2-fRgdXyQRbL-1AjOU9UBQJpNQx1neydHH2to~DdfFoZS0yaZtMfgI7TsT4uS2rTcm7NjrcfxU5HmUeqduhNO4m-dqISHmFB6mUzO12tsBftbyK7p00VP9SMtYUptYWgVBHoqIyzT4LBdDVn34JWLAeaAkvCkEnGK1BqH0WlJaH8dY5hxZ~MpkdRg0oMEvrcPL33jHk1MSmw__",
  },
];

// Dummy data for featured (completely different from deals)
const dummyFeatured: Feature[] = [
  {
    id: "f1",
    title: "Zen Spa Experience",
    category: "Wellness",
    image: "https://s3-alpha-sig.figma.com/img/f519/d52e/27f4f6b2978d0a0f49df6764b70384ed?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AUzkzNa0B5IYcY1s5ORMzOt8bYtGPk22fSCAaDeyXesnO8MmfSiPKIhKTiVCkxyIbBBgHXJgunQ7U6lQ8CCitg1R3C4aNIqHLm4G7Cs9xZimcYHDZtZa7fIdBn8BN9ODqXyUf3iUGO71IlH~4Ux-oylL5jFanWu-CF7kVDyYC6b2SzVJ~CZM50OvP5RZMRO-lQ3plELB8nuwVdUqI4q4h-eeARyQhhUNCaSCx~AZlKubPwIqxSB2Pb6CtbBNSafV3fup3Mb0TFW4B3yJtXiwrzO~lqF6goB1jd7cHtDFdNl9zRQ6PeEtWu6~19rHlhg1p6F8DGWldxbngkcQojsJXw__",
  },
  {
    id: "f2",
    title: "X Spa Experience",
    category: "Wellness",
    image: "https://s3-alpha-sig.figma.com/img/f519/d52e/27f4f6b2978d0a0f49df6764b70384ed?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AUzkzNa0B5IYcY1s5ORMzOt8bYtGPk22fSCAaDeyXesnO8MmfSiPKIhKTiVCkxyIbBBgHXJgunQ7U6lQ8CCitg1R3C4aNIqHLm4G7Cs9xZimcYHDZtZa7fIdBn8BN9ODqXyUf3iUGO71IlH~4Ux-oylL5jFanWu-CF7kVDyYC6b2SzVJ~CZM50OvP5RZMRO-lQ3plELB8nuwVdUqI4q4h-eeARyQhhUNCaSCx~AZlKubPwIqxSB2Pb6CtbBNSafV3fup3Mb0TFW4B3yJtXiwrzO~lqF6goB1jd7cHtDFdNl9zRQ6PeEtWu6~19rHlhg1p6F8DGWldxbngkcQojsJXw__",
  },
  {
    id: "f3",
    title: "Y Spa Experience",
    category: "Wellness",
    image: "https://s3-alpha-sig.figma.com/img/f519/d52e/27f4f6b2978d0a0f49df6764b70384ed?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AUzkzNa0B5IYcY1s5ORMzOt8bYtGPk22fSCAaDeyXesnO8MmfSiPKIhKTiVCkxyIbBBgHXJgunQ7U6lQ8CCitg1R3C4aNIqHLm4G7Cs9xZimcYHDZtZa7fIdBn8BN9ODqXyUf3iUGO71IlH~4Ux-oylL5jFanWu-CF7kVDyYC6b2SzVJ~CZM50OvP5RZMRO-lQ3plELB8nuwVdUqI4q4h-eeARyQhhUNCaSCx~AZlKubPwIqxSB2Pb6CtbBNSafV3fup3Mb0TFW4B3yJtXiwrzO~lqF6goB1jd7cHtDFdNl9zRQ6PeEtWu6~19rHlhg1p6F8DGWldxbngkcQojsJXw__",
  },
];

// Create the slice with reducers
const dealsSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {
    setDeals: (state) => {
      state.popular = dummyDeals;
      state.featured = dummyFeatured;
      state.doublePoints = dummyDeals;
      state.status = "succeeded";
    },
    setDealsError: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
    setLoading: (state) => {
      state.status = "loading";
    },
  },
});

export const { setDeals, setDealsError, setLoading } = dealsSlice.actions;

export default dealsSlice.reducer;
