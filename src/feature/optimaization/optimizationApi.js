import { apiSlice } from "../api/apiSlice";
import { bookingApi } from "../booking/bookingApi";

const optimizationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRoute: builder.query({
      query: ({ routes, id }) => {
        const searchRoute = routes.split(" ");

        // const check =searchRoute.slice(0, searchRoute.length - 1)
        // console.log(check)

        const updateSearchRoute = searchRoute.slice(0, searchRoute.length - 1).join(" ");

        let queryString = `route=${updateSearchRoute}`;

        return `/booking?${queryString}`;
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const result = await queryFulfilled;
        let conditionMet = false;
        result.data.map((p) => {
          if (!conditionMet && !p.group) {
            conditionMet = true;

            const prevPackageId = p.packageId;
            const updatedData = {
              name: p.name,
              packageId: arg.id,
              traveler: p.traveler,
              paymentStatus: p.paymentStatus,
              group: p.group,
              route: p.route,
            };

            dispatch(
              bookingApi.endpoints.updateBooking.initiate({
                prevPackageId,
                id: p.id,
                data: updatedData,
              })
            );
          }

          return p;
        });
      },
    }),
  }),
});

export const { useGetRouteQuery } = optimizationApi;
