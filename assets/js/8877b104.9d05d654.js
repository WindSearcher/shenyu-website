"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[6110],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>m});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=p(a),c=i,m=g["".concat(s,".").concat(c)]||g[c]||h[c]||r;return a?t.createElement(m,o(o({ref:n},d),{},{components:a})):t.createElement(m,o({ref:n},d))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},82655:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var t=a(58168),i=(a(96540),a(15680));const r={title:"LoadBalancer SPI Source Code Analysis",author:"Huihui Yin",author_title:"Apache ShenYu Contributor",author_url:"https://github.com/changanjennifer/",tags:["load balance","SPI","Apache ShenYu"]},o=void 0,l={permalink:"/blog/SPI-SourceCode-Analysis-LoadBalance-SPI",editUrl:"https://github.com/apache/shenyu-website/edit/main/blog/SPI-SourceCode-Analysis-LoadBalance-SPI.md",source:"@site/blog/SPI-SourceCode-Analysis-LoadBalance-SPI.md",title:"LoadBalancer SPI Source Code Analysis",description:"Gateway applications need to support a variety of load balancing  strategies, including random,Hashing, RoundRobin and so on. In Apache Shenyu gateway, it not only realizes such traditional algorithms, but also makes smoother traffic processing for the entry of server nodes through detailed processing such as traffic warm-up, so as to obtain better overall stability. In this article, let's walk through how Apache Shenyu is designed and implemented this part of the function.",date:"2024-10-16T16:01:51.950Z",formattedDate:"October 16, 2024",tags:[{label:"load balance",permalink:"/blog/tags/load-balance"},{label:"SPI",permalink:"/blog/tags/spi"},{label:"Apache ShenYu",permalink:"/blog/tags/apache-shen-yu"}],readingTime:13.98,truncated:!1,prevItem:{title:"Apache ShenYu Start Demo",permalink:"/blog/Start-SourceCode-Analysis-Start-Demo"},nextItem:{title:"Register Center Source Code Analysis of Http Register",permalink:"/blog/RegisterCenter-SourceCode-Analysis-Http-Register"}},s=[{value:"LoadBalancer <code>SPI</code>",id:"loadbalancer-spi",children:[]},{value:"Design of LoadBalancer module",id:"design-of-loadbalancer-module",children:[]},{value:"AbstractLoadBalancer",id:"abstractloadbalancer",children:[]},{value:"RandomLoadBalancer",id:"randomloadbalancer",children:[]},{value:"HashLoadBalancer",id:"hashloadbalancer",children:[]},{value:"RoundRobinLoadBalancer",id:"roundrobinloadbalancer",children:[]},{value:"LoadBalancerFactory",id:"loadbalancerfactory",children:[]},{value:"Using of LoadBalancer module",id:"using-of-loadbalancer-module",children:[]},{value:"Summary",id:"summary",children:[]}],p={toc:s},d="wrapper";function g(e){let{components:n,...r}=e;return(0,i.yg)(d,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Gateway applications need to support a variety of load balancing  strategies, including ",(0,i.yg)("inlineCode",{parentName:"p"},"random"),",",(0,i.yg)("inlineCode",{parentName:"p"},"Hashing"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"RoundRobin")," and so on. In ",(0,i.yg)("inlineCode",{parentName:"p"},"Apache Shenyu")," gateway, it not only realizes such traditional algorithms, but also makes smoother traffic processing for the entry of server nodes through detailed processing such as traffic ",(0,i.yg)("inlineCode",{parentName:"p"},"warm-up,")," so as to obtain better overall stability. In this article, let's walk through how ",(0,i.yg)("inlineCode",{parentName:"p"},"Apache Shenyu")," is designed and implemented this part of the function."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"This article based on ",(0,i.yg)("inlineCode",{parentName:"p"},"shenyu-2.5.0")," version of the source code analysis.")),(0,i.yg)("p",null,"[TOC]"),(0,i.yg)("h2",{id:"loadbalancer-spi"},"LoadBalancer ",(0,i.yg)("inlineCode",{parentName:"h2"},"SPI")),(0,i.yg)("p",null,"The implementation of ",(0,i.yg)("inlineCode",{parentName:"p"},"LoadBalancer")," is in ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"shenyu-loadbalancer"))," module. It has based on its ",(0,i.yg)("inlineCode",{parentName:"p"},"SPI")," creation mechanism. The core interface code is shown as follows. This interface  well explains the concept: load balancing is to select the most appropriate node from a series of server nodes.  Routing, traffic processing and load balancing is the basic function of ",(0,i.yg)("inlineCode",{parentName:"p"},"LoadBalancer")," ",(0,i.yg)("inlineCode",{parentName:"p"},"SPI"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"@SPI\npublic interface LoadBalancer {\n\n    /**\n     * this is select one for upstream list.\n     *\n     * @param upstreamList upstream list\n     * @param ip ip\n     * @return upstream\n     */\n    Upstream select(List<Upstream> upstreamList, String ip);\n}\n")),(0,i.yg)("p",null,"Where ",(0,i.yg)("inlineCode",{parentName:"p"},"upstreamList")," represents the server nodes list available for routing. ",(0,i.yg)("inlineCode",{parentName:"p"},"Upstream")," is the data structure of server node, the  important elements including ",(0,i.yg)("inlineCode",{parentName:"p"},"protocol"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"upstreamUrl")," , ",(0,i.yg)("inlineCode",{parentName:"p"},"weight"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"timestamp"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"warmup"),"\u3001",(0,i.yg)("inlineCode",{parentName:"p"},"healthy"),".  "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public class Upstream {\n    /**\n     * protocol.\n     */\n    private final String protocol;\n\n    /**\n     * url.\n     */\n    private String url;\n\n    /**\n     * weight.\n     */\n    private final int weight;\n\n    /**\n     * false close, true open.\n     */\n    private boolean status;\n\n    /**\n     * startup time.\n     */\n    private final long timestamp;\n\n    /**\n     * warmup.\n     */\n    private final int warmup;\n\n    /**\n     * healthy.\n     */\n    private boolean healthy;\n\n    /**\n     * lastHealthTimestamp.\n     */\n    private long lastHealthTimestamp;\n\n    /**\n     * lastUnhealthyTimestamp.\n     */\n    private long lastUnhealthyTimestamp;\n\n    /**\n     * group.\n     */\n    private String group;\n\n    /**\n     * version.\n     */\n    private String version;\n}\n\n\n")),(0,i.yg)("h2",{id:"design-of-loadbalancer-module"},"Design of LoadBalancer module"),(0,i.yg)("p",null,"The class diagram of ",(0,i.yg)("inlineCode",{parentName:"p"},"LoadBalancer")," module",(0,i.yg)("inlineCode",{parentName:"p"},"is"),"shown as follows."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"loadbalancer-class-diagram",src:a(13176).A})),(0,i.yg)("p",null,"We can draw the outline of ",(0,i.yg)("inlineCode",{parentName:"p"},"LoadBalancer")," module from the class diagram:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The abstract class ",(0,i.yg)("inlineCode",{parentName:"p"},"AbstractLoadBalancer")," implements the SPI ",(0,i.yg)("inlineCode",{parentName:"p"},"LoadBalancer")," interface\uff0cand supplies the template methods for selection related, such as select(), selector()\uff0cand gives the calculation of weight.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Three implementation classes which inherit ",(0,i.yg)("inlineCode",{parentName:"p"},"AbstractLoadBalancer")," to realize their own logic:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"RandomLoadBalancer")," - Weight Random"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"HashLoadBalancer"),"  - Consistent Hashing"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"RoundRobinLoadBalancer")," -Weight Round Robin per-packet"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The factory class ",(0,i.yg)("inlineCode",{parentName:"p"},"LoadBalancerFactory")," provides public static method to be called."),(0,i.yg)("p",{parentName:"li"},"The implementation classes and algorithms are configurable.   According to its specification,   by adding profile in ",(0,i.yg)("inlineCode",{parentName:"p"},"SHENYU_DIERECTORY")," directory, the data in profile should be  ",(0,i.yg)("em",{parentName:"p"},"key"),"=",(0,i.yg)("em",{parentName:"p"},"value-class")," format, where the ",(0,i.yg)("em",{parentName:"p"},"value-class")," will be load by the ",(0,i.yg)("inlineCode",{parentName:"p"},"Apache Shenyu SPI")," class loader, and ",(0,i.yg)("em",{parentName:"p"},"key")," value should be an ",(0,i.yg)("inlineCode",{parentName:"p"},"name")," defined in ",(0,i.yg)("inlineCode",{parentName:"p"},"LoadBalanceEnum.")))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"random=org.apache.shenyu.loadbalancer.spi.RandomLoadBalancer\nroundRobin=org.apache.shenyu.loadbalancer.spi.RoundRobinLoadBalancer\nhash=org.apache.shenyu.loadbalancer.spi.HashLoadBalancer\n")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"The code of LoadBalanceEnum")," is as follows\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'public enum LoadBalanceEnum {\n    /**\n     * Hash load balance enum.\n     */\n    HASH(1, "hash", true),\n\n    /**\n     * Random load balance enum.\n     */\n    RANDOM(2, "random", true),\n\n    /**\n     * Round robin load balance enum.\n     */\n    ROUND_ROBIN(3, "roundRobin", true);\n\n    private final int code;\n    private final String name;\n    private final boolean support;\n}\n')),(0,i.yg)("h2",{id:"abstractloadbalancer"},"AbstractLoadBalancer"),(0,i.yg)("p",null,"This abstract class implements the ",(0,i.yg)("inlineCode",{parentName:"p"},"LoadBalancer")," interface and define the abstract method ",(0,i.yg)("inlineCode",{parentName:"p"},"doSelect()")," to be processed by the implementation classes. In the template method ",(0,i.yg)("inlineCode",{parentName:"p"},"select()"),",  It will do validation first then call the ",(0,i.yg)("inlineCode",{parentName:"p"},"doSelect()")," method."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public abstract class AbstractLoadBalancer implements LoadBalancer {\n    /**\n     * Do select divide upstream.\n     *\n     * @param upstreamList the upstream list\n     * @param ip           the ip\n     * @return the divide upstream\n     */\n    protected abstract Upstream doSelect(List<Upstream> upstreamList, String ip);\n\n    @Override\n    public Upstream select(final List<Upstream> upstreamList, final String ip) {\n        if (CollectionUtils.isEmpty(upstreamList)) {\n            return null;\n        }\n        if (upstreamList.size() == 1) {\n            return upstreamList.get(0);\n        }\n        return doSelect(upstreamList, ip);\n    }\n}\n")),(0,i.yg)("p",null,"When the ",(0,i.yg)("inlineCode",{parentName:"p"},"timestamp")," of server node  is not null, and the interval between current time and ",(0,i.yg)("inlineCode",{parentName:"p"},"timestamp")," is within the traffic warm-up time, the formula for weight calculation is.\n$$ {1-1}\nww = min(1,uptime/(warmup/weight))\n$$\nIt can be seen from the formula that the final weight(",(0,i.yg)("inlineCode",{parentName:"p"},"ww"),") is proportional to the original-",(0,i.yg)("inlineCode",{parentName:"p"},"weight")," value. The closer the time interval is to the ",(0,i.yg)("inlineCode",{parentName:"p"},"warmup")," time, the greater the final ",(0,i.yg)("inlineCode",{parentName:"p"},"ww"),". That is, the longer the waiting time of the request, the higher the final ",(0,i.yg)("inlineCode",{parentName:"p"},"weight"),". When there is no ",(0,i.yg)("inlineCode",{parentName:"p"},"timestamp")," or other conditions, the ",(0,i.yg)("inlineCode",{parentName:"p"},"ww")," is equal to the ",(0,i.yg)("inlineCode",{parentName:"p"},"weight")," value of ",(0,i.yg)("inlineCode",{parentName:"p"},"Upstream")," object."),(0,i.yg)("p",null,"The central of thinking about ",(0,i.yg)("em",{parentName:"p"},"warm-up"),"is to avoid  bad performance when adding new server and the new ",(0,i.yg)("inlineCode",{parentName:"p"},"JVMs")," starting up."),(0,i.yg)("p",null,"Let's see how the load balancing  with ",(0,i.yg)("inlineCode",{parentName:"p"},"Random"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Hashing")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"RoundRobin")," strategy is implemented."),(0,i.yg)("h2",{id:"randomloadbalancer"},"RandomLoadBalancer"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"RandomLoadBalancer")," can handle two situations:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Each node without weight, or every node has the same weight, randomly choose one."),(0,i.yg)("li",{parentName:"ol"},"Server Nodes with different weight, choose one randomly by weight.")),(0,i.yg)("p",null,"Following is the ",(0,i.yg)("inlineCode",{parentName:"p"},"random()")," method of ",(0,i.yg)("inlineCode",{parentName:"p"},"RandomLoadBalancer"),". When traversing server node list, if the randomly generated value is less than the weight of node, then the current node will be chosen. If after one round traversing, there is no server node match, then it will choose one randomly. The ",(0,i.yg)("inlineCode",{parentName:"p"},"getWeight(final Upstream upstream)")," is defined in ",(0,i.yg)("inlineCode",{parentName:"p"},"AbstractLoadBalancer")," class."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public Upstream doSelect(final List<Upstream> upstreamList, final String ip) {\n        int length = upstreamList.size();\n        // every upstream has the same weight?\n        boolean sameWeight = true;\n        // the weight of every upstream\n        int[] weights = new int[length];\n        int firstUpstreamWeight = getWeight(upstreamList.get(0));\n        weights[0] = firstUpstreamWeight;\n        // init the totalWeight\n        int totalWeight = firstUpstreamWeight;\n        int halfLengthTotalWeight = 0;\n        for (int i = 1; i < length; i++) {\n            int currentUpstreamWeight = getWeight(upstreamList.get(i));\n            if (i <= (length + 1) / 2) {\n                halfLengthTotalWeight = totalWeight;\n            }\n            weights[i] = currentUpstreamWeight;\n            totalWeight += currentUpstreamWeight;\n            if (sameWeight && currentUpstreamWeight != firstUpstreamWeight) {\n                // Calculate whether the weight of ownership is the same.\n                sameWeight = false;\n            }\n        }\n        if (totalWeight > 0 && !sameWeight) {\n            return random(totalWeight, halfLengthTotalWeight, weights, upstreamList);\n        }\n        return random(upstreamList);\n    }\n\n    private Upstream random(final int totalWeight, final int halfLengthTotalWeight, final int[] weights, final List<Upstream> upstreamList) {\n        // If the weights are not the same and the weights are greater than 0, then random by the total number of weights.\n        int offset = RANDOM.nextInt(totalWeight);\n        int index = 0;\n        int end = weights.length;\n        if (offset >= halfLengthTotalWeight) {\n            index = (weights.length + 1) / 2;\n            offset -= halfLengthTotalWeight;\n        } else {\n            end = (weights.length + 1) / 2;\n        }\n        // Determine which segment the random value falls on\n        for (; index < end; index++) {\n            offset -= weights[index];\n            if (offset < 0) {\n                return upstreamList.get(index);\n            }\n        }\n        return random(upstreamList);\n    }\n")),(0,i.yg)("h2",{id:"hashloadbalancer"},"HashLoadBalancer"),(0,i.yg)("p",null,"In ",(0,i.yg)("inlineCode",{parentName:"p"},"HashLoadBalancer"),", it takes the advantages of ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Consistent_hashing"},"consistent hashing")," , that maps both the input traffic and the servers to a unit circle, or name as  ",(0,i.yg)("em",{parentName:"p"},"hash ring"),". For the requested",(0,i.yg)("inlineCode",{parentName:"p"},"ip")," address, with its hash value to find the node closest in clockwise order as the node to be routed.  Let's see how consistent hashing is implemented in ",(0,i.yg)("inlineCode",{parentName:"p"},"HashLoadBalancer"),"."),(0,i.yg)("p",null,"As to the hash algorithms, ",(0,i.yg)("inlineCode",{parentName:"p"},"HashLoadBalancer")," uses ",(0,i.yg)("inlineCode",{parentName:"p"},"MD5")," hash, which has the advantage of mixing the input in an unpredictable but deterministic way. The output is a 32-bit integer.  the code is shown as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'private static long hash(final String key) {\n    // md5 byte\n    MessageDigest md5;\n    try {\n        md5 = MessageDigest.getInstance("MD5");\n    } catch (NoSuchAlgorithmException e) {\n        throw new ShenyuException("MD5 not supported", e);\n    }\n    md5.reset();\n    byte[] keyBytes;\n    keyBytes = key.getBytes(StandardCharsets.UTF_8);\n    md5.update(keyBytes);\n    byte[] digest = md5.digest();\n    // hash code, Truncate to 32-bits\n    long hashCode = (long) (digest[3] & 0xFF) << 24\n            | ((long) (digest[2] & 0xFF) << 16)\n            | ((long) (digest[1] & 0xFF) << 8)\n            | (digest[0] & 0xFF);\n    return hashCode & 0xffffffffL;\n}\n')),(0,i.yg)("p",null,"Importantly, how to generate the hash ring and avoid skewness?  Let's the",(0,i.yg)("inlineCode",{parentName:"p"},"doSelect()")," method in",(0,i.yg)("inlineCode",{parentName:"p"},"HashLoadBalancer")," as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'    private static final int VIRTUAL_NODE_NUM = 5;\n\n    @Override\n    public Upstream doSelect(final List<Upstream> upstreamList, final String ip) {\n        final ConcurrentSkipListMap<Long, Upstream> treeMap = new ConcurrentSkipListMap<>();\n        upstreamList.forEach(upstream -> IntStream.range(0, VIRTUAL_NODE_NUM).forEach(i -> {\n            long addressHash = hash("SHENYU-" + upstream.getUrl() + "-HASH-" + i);\n            treeMap.put(addressHash, upstream);\n        }));\n        long hash = hash(ip);\n        SortedMap<Long, Upstream> lastRing = treeMap.tailMap(hash);\n        if (!lastRing.isEmpty()) {\n            return lastRing.get(lastRing.firstKey());\n        }\n        return treeMap.firstEntry().getValue();\n    }\n')),(0,i.yg)("p",null,'In this method, duplicated labels are used which are called "virtual nodes" (i.e.  5 virtual nodes point to a single "real" server).  It will make the distribution in hash ring more evenly, and reduce the occurrence of data skewness.'),(0,i.yg)("p",null,"In order to rescue the data sorted in the hash ring, and can be accessed quickly, we use ",(0,i.yg)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentSkipListMap.html"},"ConcurrentSkipListMap")," of Java to store the server node lists ( with virtual nodes) and its hash value as key.  This class a member of ",(0,i.yg)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/collections/index.html"},"Java Collections Framework"),", providing expected average ",(0,i.yg)("em",{parentName:"p"},"log(n)")," time cost for retrieve and access operations safely execute concurrent by multiple threads.  "),(0,i.yg)("p",null,"Furthermore, the method tailMap(K fromKey) of  ",(0,i.yg)("inlineCode",{parentName:"p"},"ConcurrentSkipListMap")," can return a view of portion of the map whose keys are greater or equal to the ",(0,i.yg)("inlineCode",{parentName:"p"},"fromKey"),", and not need to navigate the whole map."),(0,i.yg)("p",null,"In the above code section, after the hash ring is generated, it uses ",(0,i.yg)("inlineCode",{parentName:"p"},"tailMap(K fromKey)")," of ",(0,i.yg)("inlineCode",{parentName:"p"},"ConcurrentSkipListMap")," to find the subset that the elements greater, or equal to the hash value of the requested ",(0,i.yg)("inlineCode",{parentName:"p"},"ip"),", its first element is just the node to be routed. With the suitable data structure, the code looks particularly clear and concise."),(0,i.yg)("p",null,"Consistent hashing resolved the poor scalability of the traditional hashing by modular operation."),(0,i.yg)("h2",{id:"roundrobinloadbalancer"},"RoundRobinLoadBalancer"),(0,i.yg)("p",null,"The original Round-robin selection is to select server nodes one by one from the candidate list. Whenever some nodes has crash ( ex, cannot be connected after 1 minute), it will be removed from the candidate list, and do not attend the next round, until the server node is recovered and it will be add to the candidate list again.  In ",(0,i.yg)("inlineCode",{parentName:"p"},"RoundRobinLoadBalancer"),",the weight Round Robin per-packet schema is implemented."),(0,i.yg)("p",null,"In order to work in concurrent system, it provides an inner static class ",(0,i.yg)("inlineCode",{parentName:"p"},"WeigthRoundRobin")," to store and calculate the rolling selections of each server node. Following is the main section of this class( removed remark )"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"protected static class WeightedRoundRobin {\n\n    private int weight;\n\n    private final AtomicLong current = new AtomicLong(0);\n\n    private long lastUpdate;\n\n    void setWeight(final int weight) {\n        this.weight = weight;\n        current.set(0);\n    }\n    long increaseCurrent() {\n        return current.addAndGet(weight);\n    }\n\n    void sel(final int total) {\n        current.addAndGet(-1 * total);\n    }\n    void setLastUpdate(final long lastUpdate) {\n        this.lastUpdate = lastUpdate;\n    }\n}\n")),(0,i.yg)("p",null,"Please focus on the these method:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"setWeight(final int weight)")," : set the current value by ",(0,i.yg)("em",{parentName:"p"},"weight"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"increaseCurrent()"),": Increment the ",(0,i.yg)("inlineCode",{parentName:"p"},"current")," value by ",(0,i.yg)("inlineCode",{parentName:"p"},"weight"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"current")," set to 0. ")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"sel(final int total)"),": decrement  the ",(0,i.yg)("inlineCode",{parentName:"p"},"current")," value by  ",(0,i.yg)("em",{parentName:"p"},"total")),(0,i.yg)("p",{parentName:"li"},"Let's see how the weight factor being used in this round-robin  selection? "),(0,i.yg)("p",{parentName:"li"},"First it defines a two-level  ",(0,i.yg)("inlineCode",{parentName:"p"},"ConcurrentMap")," type variable named as ",(0,i.yg)("inlineCode",{parentName:"p"},"methodWeightMap")," , to cache the server node lists and the rolling selection data about each server node."))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"private final ConcurrentMap<String, ConcurrentMap<String, WeightedRoundRobin>> methodWeightMap = new ConcurrentHashMap<>(16);\n")),(0,i.yg)("p",null,"In this map, the key of first level is  set to ",(0,i.yg)("inlineCode",{parentName:"p"},"upstreamUrl")," of first element in server node list. The type of second object is ",(0,i.yg)("inlineCode",{parentName:"p"},"ConcurrentMap<String, WeightedRoundRobin>,")," the key of this inner Map is  the value ",(0,i.yg)("inlineCode",{parentName:"p"},"upstreamUrl"),"variable of each server node in this server list, the value object is ",(0,i.yg)("inlineCode",{parentName:"p"},"WeightedRoundRobin"),", used to trace the rolling selection data about each server node. As to the implementation class for the  Map object, we use ",(0,i.yg)("inlineCode",{parentName:"p"},"ConcurrentHashMap")," of ",(0,i.yg)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/package-summary.html"},"JUC"),",  a hash table supporting full concurrency of retrievals and high expected concurrency for updates."),(0,i.yg)("p",null,"In the second level of the map, the embedded  static class - ",(0,i.yg)("inlineCode",{parentName:"p"},"WeighedRoundRobin")," of each node is thread-safe, implementing the weighted ",(0,i.yg)("inlineCode",{parentName:"p"},"RoundRobin")," per bucket. The following is the code of the ",(0,i.yg)("inlineCode",{parentName:"p"},"doselect()")," method of this class."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"@Override\npublic Upstream doSelect(final List<Upstream> upstreamList, final String ip) {\n    String key = upstreamList.get(0).getUrl();\n    ConcurrentMap<String, WeightedRoundRobin> map = methodWeightMap.get(key);\n    if (Objects.isNull(map)) {\n        methodWeightMap.putIfAbsent(key, new ConcurrentHashMap<>(16));\n        map = methodWeightMap.get(key);\n    }\n    int totalWeight = 0;\n    long maxCurrent = Long.MIN_VALUE;\n    long now = System.currentTimeMillis();\n    Upstream selectedInvoker = null;\n    WeightedRoundRobin selectedWeightedRoundRobin = null;\n    for (Upstream upstream : upstreamList) {\n        String rKey = upstream.getUrl();\n        WeightedRoundRobin weightedRoundRobin = map.get(rKey);\n        int weight = getWeight(upstream);\n        if (Objects.isNull(weightedRoundRobin)) {\n            weightedRoundRobin = new WeightedRoundRobin();\n            weightedRoundRobin.setWeight(weight);\n            map.putIfAbsent(rKey, weightedRoundRobin);\n        }\n        if (weight != weightedRoundRobin.getWeight()) {\n            // weight changed.\n            weightedRoundRobin.setWeight(weight);\n        }\n        long cur = weightedRoundRobin.increaseCurrent();\n        weightedRoundRobin.setLastUpdate(now);\n        if (cur > maxCurrent) {\n            maxCurrent = cur;\n            selectedInvoker = upstream;\n            selectedWeightedRoundRobin = weightedRoundRobin;\n        }\n        totalWeight += weight;\n    }\n    ......  //erase the section which handles the time-out upstreams. \n    if (selectedInvoker != null) {\n        selectedWeightedRoundRobin.sel(totalWeight);\n        return selectedInvoker;\n    }\n    // should not happen here\n    return upstreamList.get(0);\n}\n")),(0,i.yg)("p",null,"For example we assume ",(0,i.yg)("inlineCode",{parentName:"p"},"upstreamUrl")," values of three server nodes is: LIST = ","[upstream-20, upstream-50, upstream-30]",". After a round of execution, the data in newly created ",(0,i.yg)("inlineCode",{parentName:"p"},"methodWeightMap")," is as follows:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"methodWeightMap",src:a(34870).A})),(0,i.yg)("p",null,"For the above example LIST, assumes the  ",(0,i.yg)("inlineCode",{parentName:"p"},"weight")," array is  ","[20,50,30]",".  the following figure shows the value change and polling selection process of the ",(0,i.yg)("inlineCode",{parentName:"p"},"current")," array in ",(0,i.yg)("inlineCode",{parentName:"p"},"WeighedRoundRobin")," object."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"weighted-roundrobin-demo",src:a(38129).A})),(0,i.yg)("p",null,"In each round, it will choose the server node with max ",(0,i.yg)("inlineCode",{parentName:"p"},"current")," value."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Round1:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Traverse the server node list, initialize the ",(0,i.yg)("inlineCode",{parentName:"li"},"weightedRoundRobin")," instance of each server node or update  the ",(0,i.yg)("inlineCode",{parentName:"li"},"weight")," value of server nodes object ",(0,i.yg)("inlineCode",{parentName:"li"},"Upstream")),(0,i.yg)("li",{parentName:"ul"},"Traverse the server node list, initialize the ",(0,i.yg)("inlineCode",{parentName:"li"},"weightedRoundRobin")," instance of each server node or update  the ",(0,i.yg)("inlineCode",{parentName:"li"},"weight")," value of server nodes object ",(0,i.yg)("inlineCode",{parentName:"li"},"Upstream")),(0,i.yg)("li",{parentName:"ul"},"say, in this case,  after traverse, the ",(0,i.yg)("inlineCode",{parentName:"li"},"current")," array  of the node list changes to  ","[20, 50,30]","\uff0cso according to rule, the node Stream-50 would be chosen, and then the static object ",(0,i.yg)("inlineCode",{parentName:"li"},"WeightedRoundRobin")," of  Stream-50 executes ",(0,i.yg)("inlineCode",{parentName:"li"},"sel(-total)")," , the ",(0,i.yg)("inlineCode",{parentName:"li"},"current")," array is now ","[20,-50, 30]","."))),(0,i.yg)("li",{parentName:"ul"},"Round 2:  after traverse, the ",(0,i.yg)("inlineCode",{parentName:"li"},"current")," array should be ","[40,0,60]",",  so the Stream-30 node would be chosen\uff0c ",(0,i.yg)("inlineCode",{parentName:"li"},"current")," array is now  ","[40,0,-40]","."),(0,i.yg)("li",{parentName:"ul"},"Round 3:  after traverse, ",(0,i.yg)("inlineCode",{parentName:"li"},"current")," array  changes to ","[60,50,-10]",",  Stream-20 would be chosen\uff0cand ",(0,i.yg)("inlineCode",{parentName:"li"},"current")," array is now ","[-40,50,-10]",".")),(0,i.yg)("p",null,"When there is any inconsistence or some server crashed, for example, the lists size does not match with the elements in map, it would copy and modify the element with lock mechanism, and remove the timeout server node,  the data in Map updated. Following is the fault tolerance code segment.  "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Java"},"    if (!updateLock.get() && upstreamList.size() != map.size() && updateLock.compareAndSet(false, true)) {\n        try {\n            // copy -> modify -> update reference.\n            ConcurrentMap<String, WeightedRoundRobin> newMap = new ConcurrentHashMap<>(map);\n            newMap.entrySet().removeIf(item -> now - item.getValue().getLastUpdate() > recyclePeriod);\n            methodWeightMap.put(key, newMap);\n        } finally {\n            updateLock.set(false);\n        }\n    }\n    if (Objects.nonNull(selectedInvoker)) {\n        selectedWeightedRoundRobin.sel(totalWeight);\n        return selectedInvoker;\n    }\n    // should not happen here.\n    return upstreamList.get(0);\n")),(0,i.yg)("h2",{id:"loadbalancerfactory"},"LoadBalancerFactory"),(0,i.yg)("p",null,"In this class, a static method calling ",(0,i.yg)("inlineCode",{parentName:"p"},"LoadBalancer")," is provided, where",(0,i.yg)("inlineCode",{parentName:"p"},"ExtensionLoader")," is the entry point of ",(0,i.yg)("inlineCode",{parentName:"p"},"Apache Shenyu SPI"),". That is to say, ",(0,i.yg)("inlineCode",{parentName:"p"},"LoadBalancer")," module is configurable and extensible. The ",(0,i.yg)("inlineCode",{parentName:"p"},"algorithm")," variable in this static method is the ",(0,i.yg)("inlineCode",{parentName:"p"},"name")," enumeration type defined in ",(0,i.yg)("inlineCode",{parentName:"p"},"LoadBalanceEnum"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Selector upstream.\n     *\n     * @param upstreamList the upstream list\n     * @param algorithm    the loadBalance algorithm\n     * @param ip           the ip\n     * @return the upstream\n     */\n    public static Upstream selector(final List<Upstream> upstreamList, final String algorithm, final String ip) {\n        LoadBalancer loadBalance = ExtensionLoader.getExtensionLoader(LoadBalancer.class).getJoin(algorithm);\n        return loadBalance.select(upstreamList, ip);\n    }\n")),(0,i.yg)("h2",{id:"using-of-loadbalancer-module"},"Using of LoadBalancer module"),(0,i.yg)("p",null,"In the above section, we describe the ",(0,i.yg)("inlineCode",{parentName:"p"},"LoadBalancer")," ",(0,i.yg)("inlineCode",{parentName:"p"},"SPI")," and three implementation classes. Let's take a look at how the ",(0,i.yg)("inlineCode",{parentName:"p"},"LoadBalancer")," to be used in ",(0,i.yg)("inlineCode",{parentName:"p"},"Apache Shenyu"),". ",(0,i.yg)("a",{parentName:"p",href:"http://shenyu.apache.org/docs/plugin-center/http-handle/divide-plugin"},"DividePlugin")," is a ",(0,i.yg)("inlineCode",{parentName:"p"},"plugin")," in ",(0,i.yg)("inlineCode",{parentName:"p"},"Apache Shenyu")," responsible for routing ",(0,i.yg)("inlineCode",{parentName:"p"},"http")," request. when enable to use this ",(0,i.yg)("inlineCode",{parentName:"p"},"plugin"),", it will transfer traffic according to selection data and rule data, and deliver to next plugin downstream."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"@Override\nprotected Mono<Void> doExecute(final ServerWebExchange exchange, final ShenyuPluginChain chain, final SelectorData selector, final RuleData rule) {\n   ......\n}\n")),(0,i.yg)("p",null,"The type of second parameter of ",(0,i.yg)("inlineCode",{parentName:"p"},"doExecute()")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"ShenyuPluginChain"),", which represents the execution chain of ",(0,i.yg)("inlineCode",{parentName:"p"},"plugins"),". For details, see the mechanism of ",(0,i.yg)("a",{parentName:"p",href:"http://shenyu.apache.org/docs/design/flow-control"},"Apache Shenyu Plugins"),". The third one is ",(0,i.yg)("inlineCode",{parentName:"p"},"SelectorData")," type, and the fourth is ",(0,i.yg)("inlineCode",{parentName:"p"},"RuleData")," type working as  the rule data."),(0,i.yg)("p",null,"In ",(0,i.yg)("inlineCode",{parentName:"p"},"doExecute()")," of ",(0,i.yg)("inlineCode",{parentName:"p"},"DividePlugin"),",  first verify the size of ",(0,i.yg)("inlineCode",{parentName:"p"},"header"),", content length,  etc, then preparing for load balancing."),(0,i.yg)("p",null,"Following is a code fragment using",(0,i.yg)("inlineCode",{parentName:"p"},"LoadBalancer")," in the ",(0,i.yg)("inlineCode",{parentName:"p"},"doExecute()")," method:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"    // find the routing server node list\n    List<Upstream> upstreamList = UpstreamCacheManager.getInstance().findUpstreamListBySelectorId(selector.getId());\n    ... \n    // the requested ip\n    String ip = Objects.requireNonNull(exchange.getRequest().getRemoteAddress()).getAddress().getHostAddress();\n\n    //calling the Utility class and invoke the LoadBalance processing.\n    Upstream upstream = LoadBalancerFactory.selector(upstreamList, ruleHandle.getLoadBalance(), ip);\n")),(0,i.yg)("p",null," In the above code, the output of",(0,i.yg)("inlineCode",{parentName:"p"},"ruleHandle.getLoadBalance()")," is the ",(0,i.yg)("inlineCode",{parentName:"p"},"name")," variable defined in ",(0,i.yg)("inlineCode",{parentName:"p"},"LoadBalanceEnum"),", that is ",(0,i.yg)("inlineCode",{parentName:"p"},"random"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"hash"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"roundRobin"),", etc.  It is very convenient to use ",(0,i.yg)("inlineCode",{parentName:"p"},"LoadBalancer")," by ",(0,i.yg)("inlineCode",{parentName:"p"},"LoadBalancerFactory"),". When adding more  ",(0,i.yg)("inlineCode",{parentName:"p"},"LoadBalancer")," implementing classes,  the interface in ",(0,i.yg)("inlineCode",{parentName:"p"},"plugin")," module will not be effect at all."),(0,i.yg)("h2",{id:"summary"},"Summary"),(0,i.yg)("p",null,"After reading through the code of ",(0,i.yg)("inlineCode",{parentName:"p"},"LoadBalancer")," module, from the design perspective, it is concluded that this module has the  following characteristics:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Extensibility: Interface oriented design and implemented on ",(0,i.yg)("inlineCode",{parentName:"li"},"Apache Shenyu SPI")," mechanism, it can be easily extended to other dynamic load balancing algorithms (for example, least connection, fastest mode, etc), and supports cluster processing."),(0,i.yg)("li",{parentName:"ol"},"Scalability\uff1a Every load balancing implementation,  weighted Random, consistency  Hashing and weighted ",(0,i.yg)("inlineCode",{parentName:"li"},"RoundRobin")," can well support increase or decrease cluster overall capacity."),(0,i.yg)("li",{parentName:"ol"},"More detailed design such as ",(0,i.yg)("em",{parentName:"li"},"warm-up")," can bring better performance and obtain better overall stability.")))}g.isMDXComponent=!0},13176:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/loadBalancer-class-diagram-7fa8d2dd07f1210da7d25fa787b69d5f.png"},34870:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/methodWeightMap-90b4a77aedffd8cd88bc12b9551739ad.png"},38129:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/weighted-roundrobin-demo-cec02fd422fb01ef73e882e0966a8cec.png"}}]);