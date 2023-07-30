import Image from 'next/image';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export const EventOverview = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'YOUR_API_KEY',
    });
    const containerStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
    };

    return (
        <article className="w-full flex justify-start pt-6">
            <div className="md:w-1/2">
                <Image
                    src="/images/featured_event_image_2.jpeg"
                    width={600}
                    height={100}
                    alt="event name"
                    className="w-full rounded-lg"
                    placeholder="blur"
                    blurDataURL="/images/featured_event_image_2.jpeg"
                />
                <div className="mt-4 max-w-lg">
                    <h3 className="">Description</h3>
                    <p className="bg-white py-3 px-6 rounded-lg">
                        Unite for a Cause, an impactful charity event dedicated
                        to making a positive difference in the lives of those in
                        need. This inspiring evening brings together
                        compassionate individuals and organizations, aiming to
                        create lasting change and transform communities.
                        <br />
                    </p>
                </div>
            </div>
            <div className="hidden md:block w-1/2 pl-8">
                <h3 className="mb-0">Location</h3>
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        zoom={10}
                    ></GoogleMap>
                ) : (
                    <Image
                        src="/images/map.svg"
                        width={200}
                        height={200}
                        alt="map image"
                        blurDataURL="/images/map.svg"
                        placeholder="blur"
                        className="w-full inline-block"
                    />
                )}
            </div>
        </article>
    );
};
