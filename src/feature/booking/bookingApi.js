import { apiSlice } from "../api/apiSlice";
import { addPackageApi } from "../package/packageApi";

export const bookingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooking: builder.query({
      query: (id) => `/booking?packageId=${id}`,
    }),
    updateBooking: builder.mutation({
      query: ({ id, data, prevPackageId }) => ({
        url: `/booking/${id}`,
        method: "PATCH",
        body: data,
      }),

      // optimistic cache
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        arg.data.id = arg.id;
        const updateCache = arg.data;
        const prevId = arg.prevPackageId;
        const currentId = arg.id;
        dispatch(
          apiSlice.util.updateQueryData("getBooking", arg.data.packageId, (draft) => {
            let check = true;

            draft.map((p) => {
              if (p.id == currentId) {
                check = false;
              }
              return p;
            });
              console.log(updateCache)
            if (check) {
              draft.push(updateCache);
            }
          })
        );

        try {
          const result = await queryFulfilled;
          //delete passenger from totalPassenger node
          if (result.data) {
            const passenger = await dispatch(addPackageApi.endpoints.getIdPack.initiate(prevId)).unwrap();

            if (passenger) {
              let subRes = "" + (passenger.totalPassenger - 1);

              //
              const data = {
                name: passenger.name,
                description: passenger.description,
                thumbnail: passenger.thumbnail,
                price: passenger.price,
                route: passenger.route,
                duration: passenger.duration,
                totalBus: passenger.totalBus,
                seatPerBUs: passenger.seatPerBUs,
                totalPassenger: subRes,
              };
              console.log(data);
              // updatedTotalPassenger.totalPassenger = parseInt(updatedTotalPassenger.totalPassenger) - 1;

              const sub = await dispatch(
                addPackageApi.endpoints.updatePackage.initiate({
                  id: prevId,
                  data,
                })
              ).unwrap();
            }
          }
          if (result.data) {
            const passenger = await dispatch(addPackageApi.endpoints.getIdPack.initiate(currentId)).unwrap();

            if (passenger) {
              let addRes = "" + (passenger.totalPassenger + 1);

         
              const data = {
                name: passenger.name,
                description: passenger.description,
                thumbnail: passenger.thumbnail,
                price: passenger.price,
                route: passenger.route,
                duration: passenger.duration,
                totalBus: passenger.totalBus,
                seatPerBUs: passenger.seatPerBUs,
                totalPassenger: addRes,
              };
              console.log(data);
              // updatedTotalPassenger.totalPassenger = parseInt(updatedTotalPassenger.totalPassenger) - 1;

              await dispatch(
                addPackageApi.endpoints.updatePackage.initiate({
                  id: currentId,
                  data,
                })
              ).unwrap();
            }
          }
        } catch (e) {}
      },
    }),
    addBooking:builder.mutation({
      query:(data) =>({
        url:"/booking",
        method:"POST",
        body:data
      })
    })
  }),
});

export const { useGetBookingQuery, useUpdateBookingMutation,useAddBookingMutation } = bookingApi;
