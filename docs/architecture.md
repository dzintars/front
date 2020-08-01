# Architecture

The goals of architecture which i want to implement is to enable true real-time collaboration and to enable ability to move fast by implementing new features and iteration over them to make them better. It does not matter if you have a great business idea but your execution is slow. Your competitors will kill your business very quickly.

Many pixels are wasted to write about quick iteration over new application ideas to test them, but not always that is applicable.
If you are more like in enterprise app space, the quick iteration will ruin your reputation. Every business is sensitive to bring in some new tooling. It is really hard to get your feet in the door. And if you get in, but develop crappy and non-secure product, you will get in trouble and potentially in trouble will be your client.

That's why IMO architecture and infrastructure are the first things you should get right upfront.
Once you have good setup, you are able to execute fast. Even if you are solo developer like me.

So, at current stage this project is all about getting architecture right and to validate some ideas.

General idea is to have SPA front-end with potential to split it into MPA.

Components should be decoupled from data layer. Design System should be established and documented. To enable real-time capabilities WebSockets will be utilized. There will be some REST endpoints for things like authentication and authorization, but primarily API channel will be websocket. These days and moreover taking in account that this applications strives towards enterprise domains keeping like 1M open connections is not a big deal from hardware perspective, but it's a huge deal from user perspective. IMO pure real-time applications will be must-have in the near future. REST is not capable to bring that level of interactivity without support of huge infrastructure.

Also, websocket allows to think in terms of RPC's (Remote Procedure Calls) which IMO brings in really great DX and scalability options. And Redux is a great mate of this party.

Backend will be composed of several Go services, like Source API gateway, Sink API Gateway for message broadcasting, Kafka, Redis and some other technologies. This comes from CQRS, Event Sourcing and DDD world.

In some rough early tests, this proves to be viable option and seems working pretty well.

For API gRPC and Protobufs will be used to generate REST/gRPC endpoints and Swagger documentation for message/service signatures. Potentially TypeScript type definitions will be generated for the front-end to help developers compose outbound events/action payloads.

Unfortunately i hadn't found much materials on such architecture so i am bringing all this together piece by piece on my own by taking small examples from all around the web. I am trying to leave trace of the idea sources as much as i can by leaving comments in the source code or augmenting GitHub issues, but i can't guaranty completeness.
