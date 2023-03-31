export default {
    name : "property",
    title: "Property",
    type: "document",
    fields:[
        {
            name: "title",
            title:"Title",
            type:"string"
        },
        {
            name: "description",
            title:"Description",
            type:"string"
        },
        {
            name: "type",
            title:"Type",
            type:"string"
        },
        {
            name: "purpose",
            title:"Purpose",
            type:"string"
        },
        {
            name: "location",
            title:"Location",
            type:"string"
        },
        {
            name: "furnishingStatus",
            title:"FurnishingStatus",
            type:"string"
        },
        {
            name: "agentName",
            title:"Agent Name",
            type:"string"
        },
        {
            name: "phone_number",
            title:"Phone number",
            type:"string"
        },
        {
            name:"isVerified",
            title:"Verification Status",
            type: "boolean"
        },
        {
            name:"price",
            title:"Price",
            type: "number"
        },
        {
            name: "frequency",
            title:"Payment Frequency",
            type:"string"
        },
        {
            name:"rooms",
            title:"Rooms",
            type: "number"
        },
        {
            name:"baths",
            title:"Baths",
            type: "number"
        },
        {
            name:"area",
            title:"Area",
            type: "number"
        },
        {
          name:"amenities",
          title:"Amenities",
          type:"array",
          of:[{type:"string"}]
        },
        {
            name:"logo",
            title:"Agency Logo",
            type:"image"
        },
        {
            name:"images",
            title:"Images",
            type:"array",
            of:[{type:"image"}]
          },
    ]
}