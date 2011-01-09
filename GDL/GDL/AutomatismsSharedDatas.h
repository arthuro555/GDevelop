#ifndef AUTOMATISMSSHAREDDATAS_H
#define AUTOMATISMSSHAREDDATAS_H

#include "GDL/AutomatismsRuntimeSharedDatas.h"
#include <boost/shared_ptr.hpp>
#include <string>
class TiXmlElement;

/**
 * Base class for defining automatisms shared datas.
 * Automatisms can use shared datas, as if they were extending the Scene members.
 * Inherit from this class, and redefine Clone and CreateRuntimeSharedDatas.
 */
class GD_API AutomatismsSharedDatas
{
    public:
        AutomatismsSharedDatas(std::string typeName);
        virtual ~AutomatismsSharedDatas() {};
        virtual boost::shared_ptr<AutomatismsSharedDatas> Clone() { return boost::shared_ptr<AutomatismsSharedDatas>(new AutomatismsSharedDatas(*this));}

        void SetName(std::string name_);
        std::string GetName() { return name; }
        unsigned int GetAutomatismId() { return automatismId; }

        std::string GetTypeName() { return type; }
        unsigned int GetTypeId() { return typeId; }

        /**
         * Create Runtime equivalent of the shared datas.
         * Derived class have to redefine this so as to create an appropriate
         * object containing runtime shared datas.
         */
        virtual boost::shared_ptr<AutomatismsRuntimeSharedDatas> CreateRuntimeSharedDatas()
        {
            return boost::shared_ptr<AutomatismsRuntimeSharedDatas>();
        }

        #if defined(GD_IDE_ONLY)
        /**
         * Save AutomatismsSharedDatas to XML
         */
        virtual void SaveToXml(TiXmlElement * eventElem) const {}
        #endif

        /**
         * Load AutomatismsSharedDatas from XML
         */
        virtual void LoadFromXml(const TiXmlElement * eventElem) {}

    private:
        std::string name;
        unsigned int automatismId;

        std::string type; ///< The type indicate of which type is the automatism.
        unsigned int typeId; /// The typeId is the "unsigned-int-equivalent" of the type.
};

#endif // AUTOMATISMSSHAREDDATAS_H
